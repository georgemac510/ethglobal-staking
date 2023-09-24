require('dotenv').config();
const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Staking = await hre.ethers.getContractFactory("Staking");
  const staking = await Staking.deploy();
  await staking.waitForDeployment();
  console.log("Staking deployed to:", staking.address);

  fs.writeFileSync('./config.js', `
  export const stakingAddress = "${staking.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });


// const hre = require('hardhat');

// async function main() {
//   const MyStakingFactory = await hre.ethers.getContractFactory('MyStaking');
//   const myStaking = await MyStakingFactory.deploy();
//   await myStaking.waitForDeployment();

//   console.log(`My staking token deployed to ${myStaking.address}`);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exit(1);
// });



