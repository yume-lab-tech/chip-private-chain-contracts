const Tsuken = artifacts.require('./Tsuken.sol');

module.exports = function (deployer) {
  const initialSupply = 10000;
  deployer.deploy(Tsuken, initialSupply);
};
