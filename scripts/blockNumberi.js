// Usage: node scripts/blockNumberi.js [EC2 IPアドレス]


// FIXME: エラーチェックとか
// 対象のEC2のIP
const targetIpAddress = process.argv[2];

console.log(targetIpAddress);

const W3 = require('web3')
const web3 = new W3(new W3.providers.HttpProvider('http://' + targetIpAddress + ':8545'))
web3.eth.getBlockNumber().then(result => {console.log(result)})
