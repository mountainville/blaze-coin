//SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

// import to make contract ownable
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

// import to set max supply
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";

// Console log functionality
import "hardhat/console.sol";

contract Squarium is ERC20PresetFixedSupply("Squarium", "SQR", 4200000 * 10**18, msg.sender), Ownable{

    uint256 constant MAX_INTERACTIONS =  1;
    mapping(address => uint256) interactionCount;

//Creating limit modifier of 1
    modifier limit {
        require(interactionCount[msg.sender] < MAX_INTERACTIONS);
        interactionCount[msg.sender];
        _;
    }

// Function to mint 4.2 million tokens to dev team. Can only call once and only by owner. ("UPDATE ADDRESSES BEFORE DEPLOY")
    function devMint() onlyOwner external limit {
        _mint("ADD DEV SOL ADDRESSES!!!!", 4200000 * 10**18);
        _mint("ADD DEV SOL ADDRESSES!!!!", 4200000 * 10**18);
        _mint("ADD DEV SOL ADDRESSES!!!!", 4200000 * 10**18);
        _mint("ADD DEV SOL ADDRESSES!!!!", 4200000 * 10**18);
        _mint("ADD DEV SOL ADDRESSES!!!!", 4200000 * 10**18);
    }

// Airdrop of 100.000 tokens to any address, limit of 1 drop per address. Max supply = 84.000.000.
    function airDrop() external limit {
        uint256 totalSupply = totalSupply();
        if (totalSupply < 84000000 * 10**18) {
        _mint(msg.sender, 100000 * 10**18);
        } else {
            console.log("max supply reached"); //error message when max supply reached.
        }
    }
}