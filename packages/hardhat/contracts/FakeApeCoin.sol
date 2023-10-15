// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract FakeApeCoin is ERC20, Ownable, ERC20Permit {
    constructor()
        ERC20("FakeApe", "FA")
        Ownable()
        ERC20Permit("FakeApe")
    {
        _mint(msg.sender, 100000 * 10 ** decimals());
        _mint(address(0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC), 100000 * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}