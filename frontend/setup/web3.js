import Web3 from "web3";

let web3;

const isBrowser = typeof window !== "undefined" && typeof web3 !== "undefined";

if (isBrowser) {
    web3 = new Web3(window.web3.currentProvider);
} else {
    const provider = new Web3.providers.HttpProvider(process.env.infuraEndpoint);
    web3 = new Web3(provider);
}

export default web3;
