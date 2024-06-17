import { deployContract } from "./utils";


export default async function () {
    const contractArtifactName = "GeneralPaymaster";
    // const constructorArguments = ["0x0000000000000000000000000000000000000000"];
    await deployContract(contractArtifactName);
}