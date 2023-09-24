require('dotenv').config();
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Reward = await hre.ethers.getContractFactory("Reward");
  const reward = await Reward.deploy();
  await reward.waitForDeployment();
  console.log("Staking deployed to:", reward.address);

  fs.writeFileSync('./config.reward.js', `
  export const rewardAddress = "${reward.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});






