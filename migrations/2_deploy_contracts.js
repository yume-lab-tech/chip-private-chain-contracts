const Tsuken = artifacts.require('./Tsuken.sol');

module.exports = function (deployer) {
  deployer.deploy(Tsuken);
};
