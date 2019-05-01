const Tsuken = artifacts.require('Tsuken');

contract('Tsuken', () => {
  it('should assert true', (done) => {
    assert.isTrue(true);
    Tsuken.new();
    done();
  });
});
