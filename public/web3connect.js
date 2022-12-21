//Contract ABI
const contractABI = [
  {"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"}
];

//BNB-BUSD Pancake LPs
const contractAddressBNBBUSD = '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16';
//BTC-BUSD Pancake LPs
const contractAddressBTCBUSD = '0xF45cd219aEF8618A92BAa7aD848364a158a24F33';

async function getReserves(){

//Connect to Binance Smart Chain RPC node
const web3 = new Web3('https://bsc-dataseed.binance.org/');

//BNB Price
const contract = new web3.eth.Contract(contractABI, contractAddressBNBBUSD);
const reserves = await contract.methods.getReserves().call();
const reserve0 = reserves._reserve0
const reserve1 = reserves._reserve1
const bnbprice = reserve1/reserve0
document.getElementById("bnb").innerHTML = "$"+bnbprice.toFixed(2)

//BTC Price
const contract2 = new web3.eth.Contract(contractABI, contractAddressBTCBUSD);
const reserves2 = await contract2.methods.getReserves().call();
const reserve02 = reserves2._reserve0
const reserve12 = reserves2._reserve1
const btcprice = reserve12/reserve02
document.getElementById("btc").innerHTML = "$"+btcprice.toFixed(2)
}

//Run
getReserves();