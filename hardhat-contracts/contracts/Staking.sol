// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Staking is ERC20, ERC20Burnable, Pausable, Ownable {
    constructor() ERC20("Staking", "STK") {}

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }
}

// Verified: https://goerli.arbiscan.io/address/0x06ccfbfb457a0821479fd3ff7c9b94f87b30cefd#code
// 0x06ccfBFb457a0821479FD3Ff7c9b94F87b30cEfd
