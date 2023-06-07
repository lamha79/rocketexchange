import { createAlchemyWeb3 } from "@alch/alchemy-web3";

const alchemyKey = process.env.REACT_APP_ALCHEMY_GOERLI_RPC_URL
const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS
const web3 = createAlchemyWeb3(alchemyKey)

const contractABI = require("../abis/NFTSwap.json")

// export const contract = new web3.eth.Contract(
//     contractABI,
//     contractAddress
// )

export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            const obj = {
                status: "Success",
                address: addressArray[0],
            }
            return obj
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            }
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a
                            target="_blank"
                            href={`https://metamask.io/download.html`}
                        >
                            You must install Metamask, a virtual Ethereum
                            wallet, in your browser.
                        </a>
                    </p>
                </span>
            ),
        }
    }
}

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            })
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "Connected",
                }
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                }
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            }
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a
                            target="_blank"
                            href={`https://metamask.io/download.html`}
                        >
                            You must install Metamask, a virtual Ethereum
                            wallet, in your browser.
                        </a>
                    </p>
                </span>
            ),
        }
    }
}

export const swapNFTToToken = async (address, message) => {
    //input error handling
    if (!window.ethereum || address === null) {
        return {
            status: "💡 Connect your Metamask wallet to update the message on the blockchain.",
        }
    }

    if (message.trim() === "") {
        return {
            status: "❌ Your message cannot be an empty string.",
        }
    }
    //set up transaction parameters
    const transactionParameters = {
    }

    //sign the transaction
    try {
        const txHash = await window.ethereum.request({
            method: "swapNFTToToken",
            params: [transactionParameters],
        })
        return {
            status: (
                <span>
                </span>
            ),
        }
    } catch (error) {
        return {
            status: "😥 " + error.message,
        }
    }
}
