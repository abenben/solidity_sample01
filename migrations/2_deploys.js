const Storage = artifacts.require("Storage");
const Owner = artifacts.require("Owner");
const Ballot = artifacts.require("Ballot");
module.exports = function (_deployer) {
    _deployer.deploy(Storage)
    _deployer.deploy(Owner)
    let names =
        ["0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            "0xbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
            "0xcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"];
    _deployer.deploy(Ballot, names)
};