const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy();
  const Marketplace = await hre.ethers.getContractFactory("Marketplace");
  const matketplace = await Marketplace.deploy(1);

  await nft.deployed();
  await matketplace.deployed();

  console.log(`NFT deployed to ${nft.address}`);
  console.log(`Marketplace deployed to ${matketplace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
