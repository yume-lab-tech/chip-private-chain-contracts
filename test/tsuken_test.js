const Tsuken = artifacts.require('Tsuken.sol');

contract('Tsuken', (accounts) => {
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

    it('トークンのシンボル名が正しいこと', async () => {
      const expect = 'TKN';
      const actual = await token.symbol();
      assert.equal(expect, actual);
    });

    it('トークンの少数桁数が正しいこと', async () => {
      const expect = 0;
      const actual = await token.decimals();
      assert.equal(expect, actual);
    });

    it('発行トークン量が正しいこと', async () => {
      const expect = 10000;
      const initialBalance = await token.totalSupply();
      assert.equal(expect, initialBalance);
    });
  });

  describe('トークン操作の検証', () => {
    it('発行時は発行したアドレスにトークンが全て付与されること', async () => {
      // 0番目のアドレスは初回発行しているため1番目のアカウントで検証
      const account1 = accounts[1];
      await token.mint(account1, 100);

      const balance = await token.balanceOf(account1);
      assert.equal(balance.toNumber(), 100);

      // initial(10000) + added(100) = 10100
      const totalSupply = await token.totalSupply();
      assert.equal(totalSupply.toNumber(), 10100);
    });
  });
});
