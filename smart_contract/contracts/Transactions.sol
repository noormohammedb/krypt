//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Transactions {

   uint public transactionCounter = 0 ;

   event Transfer(address sender, address receiver, uint amount, string message, uint256 timestamp, string keyword);

   struct  TransferStruct {
      address sender;
      address receiver;
      uint amount;
      string message;
      uint256 timestamp;
      string keyword;
   }

   TransferStruct[] transactions;

   function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {

      transactions.push(TransferStruct(
         msg.sender,
         receiver,
         amount,
         message,
         block.timestamp,
         keyword
      ));

      emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);

      transactionCounter += 1 ;

   }

   function getAllTransactions() public view returns(TransferStruct[] memory) {
      return transactions;
   }

}