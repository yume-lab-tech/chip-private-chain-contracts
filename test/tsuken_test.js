const Tsuken = artifacts.require('Tsuken.sol');

contract('Tsuken', () => {
  let token;

  beforeEach(async () => {
    token = await Tsuken.new();
  });

  describe('トークンの初期設定', () => {
    it('トークン名が正しいこと', async () => {
      const expect = 'Tsuken';
      const actual = await token.name();
      assert.equal(expect, actual);
    });
  });
});
