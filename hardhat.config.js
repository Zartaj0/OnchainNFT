require("@nomicfoundation/hardhat-toolbox");
require ("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url:process.env.ALCHEMY_KEY_POLYGON,
      accounts:[process.env.PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYGON_API
    }
  }
};
