import { Network, Alchemy } from "alchemy-sdk"

const alchemyKey = process.env.REACT_APP_ALCHEMY_GOERLI_API_KEY

const settings = {
    apiKey: alchemyKey,
    network: Network.ETH_GOERLI,
}

export async function alchemyClient() {
    return new Alchemy(settings)
}
