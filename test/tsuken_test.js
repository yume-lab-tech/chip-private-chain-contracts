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
    it('初回発行時は発行したアドレスにトークンが全て付与されること', async () => {
      // 0番目のアドレスは初回発行しているためこのアドレスで検証
      const account = accounts[0];

      const balance = await token.balanceOf(account);
      assert.equal(balance.toNumber(), 10000);

      const totalSupply = await token.totalSupply();
      assert.equal(totalSupply.toNumber(), 10000);
    });

    it('トークン送金が正しく稼働すること', async () => {
      const account = accounts[0]; // 10000保持
      const otherAccount = accounts[1];

      const amount = 500;

      const initialBalance = await token.balanceOf(account);
      assert.equal(initialBalance.toNumber(), 10000);

      const initialOtherBalance = await token.balanceOf(otherAccount);
      assert.equal(initialOtherBalance.toNumber(), 0);

      // send tokens.
      await token.transfer(otherAccount, amount);

      const balance = await token.balanceOf(account);
      assert.equal(balance.toNumber(), 9500);

      const otherBalance = await token.balanceOf(otherAccount);
      assert.equal(otherBalance.toNumber(), 500);
    });
  });
});
