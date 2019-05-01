# chip-private-chain-contracts
自由研究：投げ銭プロトタイプのコントラクト

## バージョン
* node.js (.node-version)
* yarn

## 使い方
```aidl
# リポジトリ取得
git clone https://github.com/yume-lab-tech/tip-private-chain-contracts.git
cd chip-private-chain-contracts

# npmパッケージインストール
yarn

# truffleパッケージインストール
yarn truffle install
```

## lint
* soliditynの静的解析:
`yarn solium -d .`
* 自動修正:
`yarn solium -d . --fix`
