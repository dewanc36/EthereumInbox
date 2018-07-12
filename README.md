# EthereumInbox

** This project is taken from a Udemy course by Stephen Grider

To run on your computer:
1) Have npm, node and solidity installed
2) Clone the project to a local directory
3) In the root of the directory execute: `npm install` 
4) Create a `config.json` file at the root of the directory and add your mnemonic and infura node url(get a free node at https://infura.io) as key value pairs
5) If you want to deploy the only available contract, run `node deploy.js`
  * if you get an error saying `'solc' module not found`, then remove the entire "node modules" folder and re-install using the below commands:
  `rm -rf node_modules`
  `npm install`
