pragma solidity ^0.5.0;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";

contract Tsuken is ERC20 {
    string public name = "Tsuken";
    string public symbol = "TKN";

    // same as ether. (1ether=1wei * (10 ** 18))
    uint public decimals = 18;

    constructor(uint initialSupply) ERC20() public {
        _mint(msg.sender, initialSupply);
    }
}
