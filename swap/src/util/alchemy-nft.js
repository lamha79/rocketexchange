import { alchemyClient } from "./alchemy-config"

// Print all NFTs returned in the response:
export async function getWalletNFTs(walletAddress) {
    return await alchemyClient.nft.getNftsForOwner(walletAddress)
}
