pragma solidity ^0.4.0;
import 'openzeppelin-solidity/contracts/token/ERC20/StandardToken.sol';

contract Tsuken is StandardToken {
    string public name = 'Tsuken';
    string public symbol = 'TKN';

    // same as ether. (1ether=1wei * (10 ** 18))
    uint public decimals = 18;

    function Tsuken(uint initialSupply) public {
        totalSupply_ = initialSupply;
        balances[msg.sender] = initialSupply;
    }
}
