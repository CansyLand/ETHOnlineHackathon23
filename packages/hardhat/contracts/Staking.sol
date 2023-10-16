// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Staking {
    uint256 private _reward = 10; // per block
    IERC20 public stakingToken;
    mapping(address => uint256) public stakes;
    mapping(address => uint256) public stakedBlock;

    constructor(IERC20 _stakingToken) {
        stakingToken = _stakingToken;
    }

    function stake(uint256 amount) external returns(bool){
        require(amount > 0, "Cannot stake 0");
        require(stakingToken.transferFrom(msg.sender, address(this), amount), "Transfer failed");
        stakes[msg.sender] += amount;
        stakedBlock[msg.sender] = block.number;
        return true;
    }

    function calculateRewards(address account) public view returns (uint256) {
        uint256 blocksStaked = block.number - stakedBlock[account];
        return stakes[account] + (_reward * 10 ** 18 * blocksStaked);
    }

    function withdraw() external {
        uint256 reward = calculateRewards(msg.sender);
        require(stakingToken.transfer(msg.sender, reward), "Transfer failed");
        stakes[msg.sender] = 0;
        stakedBlock[msg.sender] = 0;
    }
}
