const {loadFixture} = require("@nomicfoundation/hardhat-network-helpers");
const {expect} = require("chai");
const web3 = require("@nomiclabs/hardhat-web3");

describe('Token Contract', function () {


    async function deployTokenFixture() {
        const tf = await ethers.getContractFactory("HPOToken");
        const _name = 'HPO Token';
        const _symbol = 'HPO';
        const [_deployer, _owner, _handlerAddress] = await ethers.getSigners();
        _token = await tf.deploy(_name, _symbol, _owner.address,_owner.address);

        return {tf, _token, _name, _symbol, _owner, _deployer, _handlerAddress};

    }

    describe('token attributes', function () {
        it('has the correct name', async function () {
            const {_token, _name} = await loadFixture(deployTokenFixture);
            const name = await _token.name();
            expect(_name).to.equal(name);
        });

        it('has the correct symbol', async function () {
            const {_token, _symbol} = await loadFixture(deployTokenFixture);

            const symbol = await _token.symbol();
            expect(_symbol).to.equal(symbol);
        });

    });

    describe('token actions', function () {
        it('has the correct handlerAddress permission', async function () {
            const {_token, _handlerAddress} = await loadFixture(deployTokenFixture);
            const minterRole = await _token.MINTER_ROLE();
            console.log(minterRole.toString());
            const handlerMinterPermission = await _token.hasRole(minterRole, _handlerAddress.address);
            expect(handlerMinterPermission).to.equal(false);

        });

        it('deployer balance check', async function () {
            const {_token, _deployer} = await loadFixture(deployTokenFixture);

            const balance = await _token.balanceOf(_deployer.address);
            expect(balance.valueOf().toString()).to.equal("0");
        });

        it('owner balance check', async function () {
            const {_token, _owner} = await loadFixture(deployTokenFixture);

            balance = await _token.balanceOf(_owner.address).toString();
            initialRelease = await _token.initialRelease().toString();
            expect(balance).to.equal(initialRelease);
        });

    });
});
