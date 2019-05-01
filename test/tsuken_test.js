var Tsuken = artifacts.require("Tsuken");

contract("Tsuken", function(accounts) {
  it("should assert true", function(done) {
    var tsuken_test = Tsuken.deployed();
    assert.isTrue(true);
    done();
  });
});
