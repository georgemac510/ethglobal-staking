require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config()
require("@nomicfoundation/hardhat-verify");

// NEVER record important private keys in your code - this is for demo purposes
const GOERLI_TESTNET_PRIVATE_KEY = process.env.GOERLI_TESTNET_PRIVATE_KEY;
const ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY = '';

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.9',
  networks: {
    hardhat: {
      chainId: 1337,
    },
    arbitrumGoerli: {
      url: 'https://goerli-rollup.arbitrum.io/rpc',
      chainId: 421613,
      accounts: [GOERLI_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
      //accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: "RT1CVQ2YY6N4N49XDER2Y63H924PF14IKM"
  }

};

