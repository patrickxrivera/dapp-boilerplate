import Web3 from "../setup/web3";
import { abi } from "../../artifacts/Greeter";

const CONTRACT_ADDRESS = "0x5784cFB37A0404D92f195E9081a2Ae89598aaF63";

export default new Web3.eth.Contract(abi, CONTRACT_ADDRESS);
