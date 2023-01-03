//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract BlazeCoin is ERC20("Blaze Coin", "BCN"),Ownable{

// Function to mint 50 coins to function caller
    function mintfifty() public onlyOwner { 
        _mint(msg.sender, 50 * 10**18); // 10**18 because crypto counted in wei 1ETH = 10^18 Wei
    }

}