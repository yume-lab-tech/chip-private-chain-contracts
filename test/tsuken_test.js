const Tsuken = artifacts.require('Tsuken.sol');

contract('Tsuken', () => {
  let token;

  beforeEach(async () => {
    token = await Tsuken.deployed();
  });

  describe('トークンの初期設定', () => {
    it('トークン名が正しいこと', async () => {
      const expect = 'Tsuken';
      const actual = await token.name();
      assert.equal(expect, actual);
    });

    /*
    it('トークンのシンボル名が正しいこと', async () => {
      console.log(token);
      const expect = 'TKN';
      const actual = await token.symbol();
      assert.equal(expect, actual);
    });
    */

    it('トークンの少数桁数が正しいこと', async () => {
      const expect = 0;
      const actual = await token.decimals();
      assert.equal(expect, actual);
    });
  });
});
