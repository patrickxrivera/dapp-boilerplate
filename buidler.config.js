require("dotenv").config();

usePlugin("@nomiclabs/buidler-waffle");
usePlugin("@nomiclabs/buidler-ethers");

const { PRIVATE_KEY, ROPSTEN_NETWORK } = process.env;

module.exports = {
    networks: {
        ropsten: {
            url: ROPSTEN_NETWORK,
            accounts: [`0x${PRIVATE_KEY}`],
        },
    },
};
