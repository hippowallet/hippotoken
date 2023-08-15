const {ethers} = require("hardhat");
const args = require('./arguments')

async function main() {

    const HPOToken = await ethers.getContractFactory("HPOToken");
    const token = await HPOToken.deploy(...args)
    await token.deployed();
    console.log("token deployed to:", token.address)
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
