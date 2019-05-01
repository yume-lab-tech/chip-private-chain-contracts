var TsukenTest = artifacts.require("TsukenTest");

contract("TsukenTest", function(accounts) {
  it("should assert true", function(done) {
    var tsuken_test = TsukenTest.deployed();
    assert.isTrue(true);
    done();
  });
});
