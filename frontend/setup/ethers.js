import { ethers } from "ethers";

let _ethers;

const isBrowser = typeof window !== "undefined" && typeof web3 !== "undefined";

if (isBrowser) {
    _ethers = new ethers.providers.Web3Provider(window.web3.currentProvider);
} else {
    _ethers = new ethers.providers.InfuraProvider("ropsten", "e9722f3c0ffa4b2fa447ed6e1a19f3d9");
}

export default _ethers;
