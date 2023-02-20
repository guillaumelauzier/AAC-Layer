pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address public buyer;
    address public seller;
    address public arbiter;
    uint256 public price;
    bool public dispute;
    bool public settled;

    constructor(address _buyer, address _seller, address _arbiter, uint256 _price) {
        buyer = _buyer;
        seller = _seller;
        arbiter = _arbiter;
        price = _price;
        dispute = false;
        settled = false;
    }

    function initiateDispute() public {
        require(msg.sender == buyer || msg.sender == seller, "Only the buyer or seller can initiate a dispute");

        dispute = true;
    }

    function settleDispute(address payable recipient) public {
        require(msg.sender == arbiter, "Only the arbiter can settle a dispute");

        settled = true;
        recipient.transfer(price);
    }
}
