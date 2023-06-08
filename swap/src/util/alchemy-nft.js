import { Network, Alchemy } from "alchemy-sdk"

const alchemyKey = process.env.REACT_APP_ALCHEMY_GOERLI_API_KEY

const settings = {
    apiKey: alchemyKey,
    network: Network.ETH_GOERLI,
}

// Print all NFTs returned in the response:
export async function getWalletNFTs(walletAddress) {
    const alchemyClient = new Alchemy(settings)

    return alchemyClient.nft.getNftsForOwner(walletAddress)
}
