require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");

dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Ig2X_CbneCWGxJQz3lqBqznAWSjcffmd',
      accounts:'acd064e52dcc2c01dcba6203fb51a2b783fb083e2a3914b3106f55f4bec1487e'
    },

  },
  etherscan:{
    apikey: '398J5DE4JI16HUTIQ56H8NFTNMQXEV4M8B',
  }
};
