pragma solidity ^0.8.0;

contract SimpleSmartContract {
    address payable public seller;
    address payable public buyer;
    uint256 public price;
    uint256 public deliveryDate;
    bool public delivered;

    constructor(address payable _seller, address payable _buyer, uint256 _price, uint256 _deliveryDate) {
        seller = _seller;
        buyer = _buyer;
        price = _price;
        deliveryDate = _deliveryDate;
        delivered = false;
    }

    function confirmDelivery() public {
        require(msg.sender == buyer, "Only the buyer can confirm delivery");
        require(block.timestamp >= deliveryDate, "Delivery date has not yet arrived");

        delivered = true;
        seller.transfer(price);
    }
}
