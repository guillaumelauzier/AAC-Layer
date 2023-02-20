pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address public owner;
    uint256 public balance;
    uint256 public alertThreshold;
    address[] public blacklistedAddresses;

    constructor() {
        owner = msg.sender;
        balance = 0;
        alertThreshold = 1000;
        blacklistedAddresses.push(address(0x0000000000000000000000000000000000000001));
    }

    function deposit(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can deposit funds");
        require(checkAlert(amount), "Transaction exceeds alert threshold");
        balance += amount;
    }

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        require(balance >= amount, "Insufficient funds");
        balance -= amount;
    }

    function checkAlert(uint256 amount) private returns (bool) {
        if (amount > alertThreshold) {
            emit AlertTriggered("Transaction exceeds alert threshold");
            return false;
        }
        for (uint256 i = 0; i < blacklistedAddresses.length; i++) {
            if (msg.sender == blacklistedAddresses[i]) {
                emit AlertTriggered("Transaction involves blacklisted address");
                return false;
            }
        }
        return true;
    }

    event AlertTriggered(string alertMessage);
}
