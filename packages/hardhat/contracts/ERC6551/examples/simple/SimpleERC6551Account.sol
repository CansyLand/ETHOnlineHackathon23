// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "openzeppelin-contracts/utils/introspection/IERC165.sol";
import "openzeppelin-contracts/token/ERC721/IERC721.sol";
import "openzeppelin-contracts/interfaces/IERC1271.sol";
import "openzeppelin-contracts/utils/cryptography/SignatureChecker.sol";

import "../../interfaces/IERC6551Account.sol";
import "../../lib/ERC6551AccountLib.sol";

// Useful for debugging. Remove when deploying to a live network. ❌
import "hardhat/console.sol";

contract SimpleERC6551Account is IERC165, IERC1271, IERC6551Account {
    uint256 public nonce;

    receive() external payable {
        console.log("Account Receive");
    }

    function executeCall(
        address to,
        uint256 value,
        bytes calldata data
    ) external payable returns (bytes memory result) {

        console.log("Account Contrac Implementation onchain");
        console.log("address", to);
        console.log("value", value);
        console.log("owner", owner());
        console.log("msg.sender", msg.sender);

        require(msg.sender == owner(), "Not token owner");

        ++nonce;

        emit TransactionExecuted(to, value, data);

        bool success;
        (success, result) = to.call{value: value}(data);

        if (!success) {
            assembly {
                revert(add(result, 32), mload(result))
            }
        }
    }

    function token()
        external
        view
        returns (
            uint256,
            address,
            uint256
        )
    {
        console.log("Account token");
        return ERC6551AccountLib.token();
    }

    function owner() public view returns (address) {
         console.log("Account Owner");
        (uint256 chainId, address tokenContract, uint256 tokenId) = this.token();
        if (chainId != block.chainid) return address(0);

        return IERC721(tokenContract).ownerOf(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public pure returns (bool) {
         console.log("Account Interface");
        return (interfaceId == type(IERC165).interfaceId ||
            interfaceId == type(IERC6551Account).interfaceId);
    }

    function isValidSignature(bytes32 hash, bytes memory signature)
        external
        view
        returns (bytes4 magicValue)
    {
         console.log("Account Is valid signature");
        bool isValid = SignatureChecker.isValidSignatureNow(owner(), hash, signature);

        if (isValid) {
            return IERC1271.isValidSignature.selector;
        }

        return "";
    }
}
