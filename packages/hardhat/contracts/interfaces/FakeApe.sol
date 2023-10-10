// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FakeApe is ERC20 {
    constructor() ERC20("FakeApe", "FA") {
        // _mint(msg.sender, 100000 * 10 ** decimals());
        _mint(address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC), 100000 * 10 ** decimals());
        
    }
}