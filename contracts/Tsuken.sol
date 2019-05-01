pragma solidity ^0.5.0;
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Burnable.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";


contract Tsuken is ERC20Mintable, ERC20Burnable, ERC20Detailed {
  string private _name = "Tsuken";

  string private _symbol = "TKN";

  // same as ether. (1ether=1wei * (10 ** 18))
  uint8 private _decimals = 18;

  uint private initialSupply = 10000;

  constructor()
    ERC20Detailed(_name, _symbol, _decimals)
    ERC20Burnable()
    ERC20Mintable() public {

    _mint(msg.sender, initialSupply);
  }
}
