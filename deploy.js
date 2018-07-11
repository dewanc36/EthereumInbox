const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'small mandate tree brick divert ill clerk depart office agree evidence interest',
    'https://rinkeby.infura.io/8g6Qzs52Ty90k2RdAvWF',
);
//console.log(provider);
const web3 = new Web3(provider);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const deploy = async () => {
  
  console.log(web3.eth);
  const accounts = await web3.eth.getAccounts(function(err, res){ console.log(res); });
  //await sleep(10000);
  console.log("here too:",accounts);
  
  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: '0x' + bytecode, arguments: ['Hi there!'] })
    .send({from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();