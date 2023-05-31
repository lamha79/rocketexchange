import { ethers, run, network } from "hardhat"

const CONTRACT_NAME = "Lock"

async function main() {
    const contractFactory = await ethers.getContractFactory(
        CONTRACT_NAME
    )
    console.log("Deploy contract...")
    const contract = await contractFactory.deploy()
    await contract.deployed()
    console.log(`Deployed contract to: ${contract.address}`)

    if (network.config.chainId === 5 && process.env.ETHERSCAN_API_KEY) {
        await contract.deployTransaction.wait(6)
        await verify(contract.address, [])
    }
}

async function verify(contractAddress: string, args: any[]) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            args: args,
        })
    } catch (error: any) {
        console.log(error)
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
