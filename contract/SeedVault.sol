// SPDX-License-Identifier: MIT
pragma solidity 0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/AccessControl.sol";

contract SeedVault {
    // 0xdac17f958d2ee523a2206206994597c13d831ec7
    uint256 lockId;
    uint256 unLockedId;
    uint256 circleId;

    uint256 public contractBalance;

    //  Events
    event EtherDeposited(address, uint256);

    struct LockVault {
        address payable owner;
        string purpose;
        uint256 timeForLock;
        address tokenAddress;
        uint256 amountDeposited;
        uint256 withdrawTime;
        uint256 depositTime;
    }

    struct UnLockVault {
        address payable owner;
        string purpose;
        address tokenAddress;
        uint256 timeForLock;
        uint256 amountDeposited;
        uint256 withdrawTime;
        uint256 depositTime;
    }

    struct Circle {
        address payable owner;
        address tokenAddress;
        address[] donator;
        string purpose;
        uint256 timeForLock;
        uint256 amountDeposited;
        uint256 withdrawTime;
        uint256 depositTime;
    }

    constructor() {}

    modifier onlyManager(address _owner) {
        require(_owner == msg.sender, "Only the owner can call this function");
        _;
    }

    mapping(uint256 => LockVault) _lockValut;
    mapping(uint256 => UnLockVault) _unLockValut;
    mapping(uint256 => Circle) _circle;
    mapping(address => Circle) circle;

    function depositLock(
        string memory _purpose,
        uint256 _amountDeposited,
        uint256 _lockPeriod
    ) external {
        require(
            _amountDeposited > 0,
            "Amount deposited should be greater zero"
        );
        uint256 releaseDate = block.timestamp + _lockPeriod * 1 days;
        LockVault storage lockedVault = _lockValut[lockId];
        lockedVault.amountDeposited = _amountDeposited;
        lockedVault.purpose = _purpose;
        lockedVault.owner = payable(msg.sender);
        lockedVault.depositTime = block.timestamp;
        lockedVault.withdrawTime = releaseDate;

        (bool sent, ) = msg.sender.call{value: _amountDeposited}("");
        require(sent, "Failed to send Ether");
    }

    function withdrawLockedFund(uint256 _id) external {
        require(_id < lockId, "Invalid lock ID");
        require(msg.sender == _lockValut[_id].owner, "You are the owner");
        require(
            block.timestamp >= _lockValut[_id].withdrawTime,
            "Fund is till locked"
        );

        uint256 amountToWithdraw = _lockValut[_id].amountDeposited;
        require(amountToWithdraw > 0, "Insufficient balance");

        // Transfer the funds back to the user
        (bool sent, ) = msg.sender.call{value: amountToWithdraw}("");
        require(sent, "Failed to send Ether");
    }

    function withdrawUnLockedFund() external {}

    function withdrawCircleFund() external {}

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }

    receive() external payable {
        // This function is called when Ether is sent to the contract
        contractBalance += msg.value;
        emit EtherDeposited(msg.sender, msg.value);
    }
}
