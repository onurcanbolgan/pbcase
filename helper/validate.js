const ethers = require("ethers");
module.exports = class Ether {
    constructor(network,apiKey) {
        try {
            this.provider = new ethers.providers.InfuraProvider(network,apiKey);
        }catch (e){
            console.warn(e);
        }
    }
    validate(address) {
        try {
            return ethers.utils.isAddress(address);
        }catch (e) {
            return false;
        }
    }
    async getBalance(address) {
        try {
            return await this.provider.getBalance(address);
        }catch (e){
            console.warn(e);
        }
    }
    formatEther(balance) {
        try {
            return ethers.utils.formatEther(balance);
        }catch (e){
            console.warn(e);
        }
    }
}
