require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
   solidity: "0.8.0",
   networks: {
      ropsten: {
         url: process.env.node_url,
         accounts: {
            mnemonic: process.env.mnemonic_phrase,
         },
      },
   },
};
