const Web3 = require("web3")
// require("dotenv").config();

export const callPriceFeed = async (inputAmount) => {
    // async function main() {
    // Configuring the connection to an Ethereum node
    // const network = process.env.ETHEREUM_NETWORK;
    const web3 = new Web3(
        new Web3.providers.HttpProvider(
            // `https://${network}.infura.io/v3/${process.env.INFURA_API_KEY}`
            "https://goerli.infura.io/v3/56222095b5834de68471a002c9a843f6"
        )
    )
    // Creating a signing account from a private key
    console.log(
        `SIGNER_PRIVATE_KEY :::: `,
        "3b4207a6522497b782e6595965f904f5299efaf532327cb5e774860ffac6ace3"
    )
    const signer = web3.eth.accounts.privateKeyToAccount(
        // process.env.SIGNER_PRIVATE_KEY
        "3b4207a6522497b782e6595965f904f5299efaf532327cb5e774860ffac6ace3"
    )
    web3.eth.accounts.wallet.add(signer)

    // Get price feed from smart contract ETH/USD Goerli
    const aggregatorV3InterfaceABI = [
        {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "description",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                { internalType: "uint80", name: "_roundId", type: "uint80" },
            ],
            name: "getRoundData",
            outputs: [
                { internalType: "uint80", name: "roundId", type: "uint80" },
                { internalType: "int256", name: "answer", type: "int256" },
                { internalType: "uint256", name: "startedAt", type: "uint256" },
                { internalType: "uint256", name: "updatedAt", type: "uint256" },
                {
                    internalType: "uint80",
                    name: "answeredInRound",
                    type: "uint80",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "latestRoundData",
            outputs: [
                { internalType: "uint80", name: "roundId", type: "uint80" },
                { internalType: "int256", name: "answer", type: "int256" },
                { internalType: "uint256", name: "startedAt", type: "uint256" },
                { internalType: "uint256", name: "updatedAt", type: "uint256" },
                {
                    internalType: "uint80",
                    name: "answeredInRound",
                    type: "uint80",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "version",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
        },
    ]
    const eth_link_price_feed = process.env.ETH_LINK_PRICE_FEED
    const priceFeed = new web3.eth.Contract(
        aggregatorV3InterfaceABI,
        // eth_link_price_feed
        "0xb4c4a493AB6356497713A78FFA6c60FB53517c63"
    )

    // await priceFeed.methods
    //     .decimals()
    //     .call()
    //     .then((decimals) => {
    //         console.log(`decimals :::: `, decimals)
    //         priceFeed.methods
    //             .latestRoundData()
    //             .call()
    //             .then((roundData) => {
    //                 console.log(`roundData`, roundData)
    //                 console.log(
    //                     `PRICE LINK :::: `,
    //                     Number(
    //                         (
    //                             roundData.answer.toString() / Math.pow(10, decimals)
    //                         ).toFixed(8)
    //                     )
    //                 )
    //                 const priceRatio = Number((roundData.answer.toString() / Math.pow(10, decimals)).toFixed(8));
    //                 console.log(`inputAmount :::: `,inputAmount);
    //                 return Number(
    //                     (
    //                         inputAmount / priceRatio
    //                     ).toFixed(2)
    //                 )
    //             })
    //     })
    const decimalVal = await priceFeed.methods.decimals().call();
    const latestRoundData = await priceFeed.methods.latestRoundData().call();
    const priceRatio = Number((latestRoundData.answer.toString() / Math.pow(10, decimalVal)).toFixed(8));
    console.log(`decimalVal :::: `,decimalVal);
    console.log(`priceRatio :::: `,priceRatio);

        return Number((inputAmount / priceRatio).toFixed(2));
}
