const Web3 = require("web3");
const web3 = new Web3("http://127.0.0.1:7545");

const ABI = require("./contracts/Counter.json");
const address = "0x5760a1a13A415b6dD22Bd73D55322a799a812d14";

const loadContract = (web3) => {
  return new web3.eth.Contract(ABI, address);
};

const Contract = loadContract(web3);

const getCount = async () => {
  const count = await Contract.methods.get().call();
  return count;
}

module.exports = { getCount };
