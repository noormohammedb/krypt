const hre = require("hardhat");

const main = async () => {
   const Transactions = await hre.ethers.getContractFactory("Transactions");
   const tranc = await Transactions.deploy();

   await tranc.deployed();

   console.log("Transactions deployed to: ", tranc.address);
};

(async () => {
   try {
      await main();
      process.exit(0);
   } catch (error) {
      console.error(error);
      process.exit(1);
   }
})();
