pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address public owner;
    uint256 public balance;
    bool public amlCheckPassed;

    constructor() {
        owner = msg.sender;
        balance = 0;
        amlCheckPassed = false;
    }

    function deposit(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can deposit funds");
        require(amlCheckPassed, "AML check failed");

        balance += amount;
    }

    function passAmlCheck() public {
        require(msg.sender == owner, "Only the owner can pass the AML check");

        amlCheckPassed = true;
    }
}
