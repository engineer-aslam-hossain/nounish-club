const { Goerli } = require("@usedapp/core");
const { Contract } = require("@ethersproject/contracts");
const { Interface } = require("ethers/lib/utils");
const abi = require("./abi.json");

module.exports.contracts = {
  [Goerli.chainId]: new Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ID,
    new Interface(abi)
  ),
};

module.exports.resolvers = {
  [Goerli.chainId]: process.env.NEXT_PUBLIC_RESOLVERS_ID,
};
