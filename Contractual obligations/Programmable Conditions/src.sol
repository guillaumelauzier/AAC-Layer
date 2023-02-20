pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address public owner;
    uint256 public funds;
    bool public conditionsMet;

    constructor() {
        owner = msg.sender;
        funds = 0;
        conditionsMet = false;
    }

    function deposit(uint256 amount) public {
        require(msg.sender == owner, "Only the owner can deposit funds");
        funds += amount;
    }

    function releaseFunds() public {
        require(msg.sender == owner, "Only the owner can release funds");
        require(conditionsMet, "Conditions have not been met");

        owner.transfer(funds);
        funds = 0;
    }

    function meetConditions() public {
        require(msg.sender == owner, "Only the owner can meet conditions");

        conditionsMet = true;
    }
}
