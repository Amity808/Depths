const { Provider, Wallet, types, ContractFactory} = require("zksync-ethers")
const { ethers } = require("ethers");
require('dotenv').config()
const AccountPaymanster = require('../artifacts-zk/contracts/paymasters/ApprovalPaymaster.sol/ApprovalPaymaster.json')

const { abi, bytecode } = AccountPaymanster

const provider = Provider.getDefaultProvider(types.Network.Sepolia); // zkSync Era testnet (L2)
const ethProvider = ethers.getDefaultProvider("sepolia"); // Sepolia testnet (L1)

 const PRIVATE_KEY = process.env.PRIVATE_KEY;

 if (!PRIVATE_KEY) {
    console.error("Please set your PRIVATE_KEY in the .env file");
    process.exit(1);
}

 const wallet = new Wallet(PRIVATE_KEY, provider);
 

//  ed165d75240f1639cc37ff0032cc3641d662668c815a93739b9170acdbc8de5c

 (async () => {
    try {
        const cf =  new ContractFactory(abi, bytecode, wallet)
        const balance = await wallet.getBalance();
        console.log(balance);
        
        const result = await cf.deploy()
        const contract = (await result).waitForDeployment()
        console.log( (await contract).getAddress());
        // console.log(`Balance: ${utils.formatEther(balance)} ETH`);
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
})();