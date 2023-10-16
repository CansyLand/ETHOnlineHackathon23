// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract GenericNFT is 
	ERC721, 
	ERC721URIStorage,
    ERC721Enumerable,
	Ownable {
    uint256 public _nextTokenId = 0;

    constructor(address initialOwner)
        ERC721("GenericNFT", "GN")
        Ownable()
    {
        _transferOwnership(initialOwner);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "http://localhost:3000/nfts/";
    }

    // function safeMint(address to, string memory uri) public onlyOwner {
    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, Strings.toString(tokenId));
    }

    // function safeMint(address to, string memory uri) public onlyOwner {
    function notSoSafeMint(address to) public {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, Strings.toString(tokenId));
    }

    // The following functions are overrides required by Solidity ERC721URIStorage.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        uint256 imageId = tokenId % 14;
        string memory uri = super.tokenURI(imageId);
        return string(abi.encodePacked(uri, ".png"));
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // The following functions are overrides required by Solidity Enumerable.

    // function _update(address to, uint256 tokenId, address auth)
    //     internal
    //     override(ERC721, ERC721Enumerable)
    //     returns (address)
    // {
    //     return super._update(to, tokenId, auth);
    // }

    // function _increaseBalance(address account, uint128 value)
    //     internal
    //     override(ERC721, ERC721Enumerable)
    // {
    //     super._increaseBalance(account, value);
    // }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);

        // Your additional code here
    }

}
