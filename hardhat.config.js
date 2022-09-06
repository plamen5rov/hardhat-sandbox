require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};
task(
  "accounts",
  "Prints the list of available accounts",
  async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
      console.log(account.address);
    }
  }
);

task(
  "numbered",
  "Prints a numbered list of available accounts",
  async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    let num = 0;
    for (const account of accounts) {
      num++;
      console.log("Account #" + num + ": " + account.address);
    }
  }
);
