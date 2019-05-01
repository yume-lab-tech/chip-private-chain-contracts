var Tsuken = artifacts.require('./Tsuken.sol');

module.exports = function(deployer) {
    let initialSupply = 10000;
    deployer.deploy(Tsuken, initialSupply);
};
