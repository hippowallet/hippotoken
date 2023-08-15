/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");

module.exports = {
    defaultNetwork: "hardhat",

    networks: {
        localhost: {
            url: "http://127.0.0.1:8545"
        },
        hardhat: {}

    },
    solidity: {
        version: "0.8.11",
        settings: {
            optimizer: {
                enabled: true
            }
        }
    },
    paths: {
        sources: "./contracts/token/",
        tests: "./test",
        cache: "./cache",
        artifacts: "./artifacts"
    },
    mocha: {
        timeout: 20000
    }
};
