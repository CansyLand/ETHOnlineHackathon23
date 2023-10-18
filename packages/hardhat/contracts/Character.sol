// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./Staking.sol";
import "./Tokenbound/Account.sol";
import "./CharacterTables.sol";


// Useful for debugging. Remove when deploying to a live network. ❌
import "hardhat/console.sol";
/*

    each address can hold only one NFT
    soulbound
    on withdraw burns
    increase XP (staking reward / players in game)

 */


contract Character is
        ERC721,
        ERC721Burnable,
        ERC721URIStorage,
        ERC721Enumerable,
        Ownable,
        CharacterTables
    {
    uint256 private _nextTokenId;
    uint256 private _totalStaked;
    address private _apeCoin;
    address private _staking;

    Staking stakingContract;
    Account accountImplementation;

    mapping(address => uint256) private _balances;
    

    constructor(address _apeCoinAddress, address _stakingContract)
        ERC721("Character", "RPG")
        Ownable()
    {
        _apeCoin = _apeCoinAddress;
        _staking = _stakingContract;
        stakingContract = Staking(_stakingContract);
        _create();  // create tableland database table
    }

    function _baseURI() internal pure override returns (string memory) {
        return "https://MyURL.com";
    }

    // function mintToTokenbound(address payable to) external returns(uint256, address, uint256) {
    //     require(balanceOf(to) == 0, "Address already owns an NFT");
    //     accountImplementation = Account(to);
    //      // Ask this address if it is a Tokenbound
    //     (uint256 chainId, address tokenContract, uint256 nftTokenId) = accountImplementation.token();
    //     uint256 tokenId = _nextTokenId++;
    //     _initCharacter(tokenId); // Creates new row in DB
    //     _safeMint(to, tokenId); // tokenId is this Character token not owner nft
    //     return (chainId, tokenContract, nftTokenId);
    // }

     function mintToTokenbound(address payable to) external {
        require(balanceOf(to) == 0, "Address already owns an NFT");
        accountImplementation = Account(to);

        // Check if caller is a Tokenbound account ERC-6551
        // Reverts if this is not an Tokenbound
        (uint256 chainId, address tokenContract, uint256 nftTokenId) = accountImplementation.token();
        console.log("### NFT TOKEN ID of mint function caller", nftTokenId);
        console.log("### Token Contract:", tokenContract);

        uint256 tokenId = _nextTokenId++;
        _initCharacter(tokenId); // Creates new row in DB
        _safeMint(to, tokenId); // tokenId is this Character token not owner nft
        // return (chainId, tokenContract, nftTokenId);
    }

    function transferFrom(address from, address to, uint256 tokenId) public virtual override(ERC721, IERC721) {
        require(false, "This NFT is soulbound");
    }

    /**
    *   @dev rewardShare is between 0 - 255
    *       it is divides between winner and loser
    *       example = winner 180 loser 75
    *
    *       each arena can decide on own rules
    *
    *    &fureDev    // higher rewards for verified players -> galaxy pass
    *                // zk verify over twitter?
    *
     */
     // address playerA, address playerB
    function gameResult(uint256 tokenIdA, uint256 tokenIdB, uint8 rewardShareA, uint8 playersInGame) external {
        // get stake rewards amount
        uint256 newTotalStake = stakingContract.calculateRewards(address(this));
        uint256 stakingRewards = newTotalStake - _totalStaked;

        // calculate proportion of reward
        uint256 totalPlayersReward = stakingRewards / playersInGame;

        // calculate percentage of reward
        uint256 playerRewardA = (totalPlayersReward * rewardShareA) / 255;
        uint256 playerRewardB = totalPlayersReward - playerRewardA;

        bool winnerA;
        bool winnerB;
        if (playerRewardA > playerRewardB) {
            winnerA = true;
            winnerB = false;
        } else {
            winnerA = false;
            winnerB = true;
        }
        // add reward to characters XP in table
        // ⚠️ Better to combine writes into one
        _updateCharacter( tokenIdA, winnerA, playerRewardA);
        _updateCharacter( tokenIdB, winnerB, playerRewardB);

        _totalStaked = newTotalStake;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage) {
        // will call _burn in ERC721URIStorage
        // which will in return call _burn in ERC721
        super._burn(tokenId); 
        
    }


    // ERC-20
    function receiveTokens(IERC20 token, uint256 amount) public {
        require(token.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        _balances[address(token)] += amount;
    }

    function getTokenBalance(IERC20 token) public view returns (uint256) {
        return _balances[address(token)];
    }

    function stakeTokens(uint256 amount) external {
        IERC20 token = IERC20(_apeCoin);
        require(token.approve(_staking, amount), "Approval failed");
        require(stakingContract.stake(amount), "Stake failed");
        _totalStaked += amount;
    }

    function totalStaked() view external {
        stakingContract.calculateRewards(address(this));
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

        // Your additional code here
    }
}