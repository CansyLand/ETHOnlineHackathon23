// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

import "openzeppelin-contracts/utils/Create2.sol";

import "./interfaces/IERC6551Registry.sol";
import "./lib/ERC6551BytecodeLib.sol";

// Useful for debugging. Remove when deploying to a live network. ❌
import "hardhat/console.sol";

contract ERC6551Registry is IERC6551Registry {
    error InitializationFailed();

    function createAccount(
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 salt,
        bytes calldata initData
    ) external returns (address) {
        bytes memory code = ERC6551BytecodeLib.getCreationCode(
            implementation,
            chainId,
            tokenContract,
            tokenId,
            salt
        );

        address _account = Create2.computeAddress(bytes32(salt), keccak256(code));
        console.log("ACCCCOOOOOUUUNTTTT");
        console.log(_account);

        if (_account.code.length != 0) return _account;

        emit AccountCreated(_account, implementation, chainId, tokenContract, tokenId, salt);

        console.log("_account", _account);
        console.log("implementation", implementation);
        console.log("chainId", chainId);
        console.log("tokenContract", tokenContract);
        console.log("tokenId", tokenId);
        console.log("salt", salt);
        

        _account = Create2.deploy(0, bytes32(salt), code);

        console.log("Account created:", _account);

        console.log("initData Legth:", initData.length);


        


        if (initData.length != 0) {
            // (bool success, ) = _account.call(initData);
            (bool success, ) = _account.call{gas: 10000000000}(initData);  // Modified line with specified gas limit
            if (!success) revert InitializationFailed();
        }

        return _account;
    }

    function account(
        address implementation,
        uint256 chainId,
        address tokenContract,
        uint256 tokenId,
        uint256 salt
    ) external view returns (address) {
        bytes32 bytecodeHash = keccak256(
            ERC6551BytecodeLib.getCreationCode(
                implementation,
                chainId,
                tokenContract,
                tokenId,
                salt
            )
        );

        return Create2.computeAddress(bytes32(salt), bytecodeHash);
    }
}
