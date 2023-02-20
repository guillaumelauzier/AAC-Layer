pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address public owner;
    uint256 public balance;
    event BalanceUpdated(address indexed owner, uint256 balance);

    constructor() {
        owner = msg.sender;
        balance = 0;
    }

    function deposit(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can deposit funds");
        balance += amount;
        emit BalanceUpdated(owner, balance);
    }

    function withdraw(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can withdraw funds");
        require(balance >= amount, "Insufficient funds");
        balance -= amount;
        emit BalanceUpdated(owner, balance);
    }
}
