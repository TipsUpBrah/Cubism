const hre = require("hardhat");

async function main() {

  const Cubes = await hre.ethers.getContractFactory("Cubes");
  const cubes = await Cubes.deploy(0x20EC47786d4DA8F7f8479cA168391ca99435AcC3,"ipfs://QmSDR97bwJMMUNooXH2FmxRZnJxYmENj9v9G7HkVn3FVhd/","ipfs://QmejQBz6G7Dg5PNT5fsuqLJ3oJfBmXZaYaMyE3ehN67PTP",0x20EC47786d4DA8F7f8479cA168391ca99435AcC3);

  await cubes.deployed();

  console.log(
    `Cubes with deployed to ${cubes.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
