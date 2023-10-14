// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

// https://github.com/tokenbound/contracts/blob/main/src/AccountProxy.sol

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Upgrade.sol";
import "@openzeppelin/contracts/proxy/Proxy.sol";

error InvalidImplementation();

contract AccountProxy is Proxy, ERC1967Upgrade {
    address public immutable defaultImplementation;

    constructor(address _defaultImplementation) {
        if (_defaultImplementation == address(0))
            revert InvalidImplementation();
        defaultImplementation = _defaultImplementation;
    }

    function initialize() external {
        address implementation = ERC1967Upgrade._getImplementation();

        if (implementation == address(0)) {
            ERC1967Upgrade._upgradeTo(defaultImplementation);
        }
    }

    function _implementation() internal view override returns (address) {
        return ERC1967Upgrade._getImplementation();
    }
}