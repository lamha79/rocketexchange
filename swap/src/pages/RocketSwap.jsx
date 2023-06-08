import { useState, useEffect } from "react"
import { ethers } from "ethers"
import { GearFill } from "react-bootstrap-icons"

import CommonSection from "../components/ui/Common-section/CommonSection"
import "../styles/swap.css"
import PageButton from "../components/PageButton"
import ConnectButton from "../components/ConnectButton"
import ConfigModal from "../components/ConfigModal"
import CurrencyField from "../components/CurrencyField"
// import detectEthereumProvider from "@metamask/detect-provider";

import BeatLoader from "react-spinners/BeatLoader"
import {
    getWethContract,
    getUniContract,
    getPrice,
    runSwap,
} from "../AlphaRouterService"

import { callPriceFeed } from "../CallPriceFeedChainlink"

const RocketSwap = () => {
    const [provider, setProvider] = useState(undefined)
    const [signer, setSigner] = useState(undefined)
    const [signerAddress, setSignerAddress] = useState(undefined)

    const [slippageAmount, setSlippageAmount] = useState(2)
    const [deadlineMinutes, setDeadlineMinutes] = useState(10)
    const [showModal, setShowModal] = useState(undefined)

    const [inputAmount, setInputAmount] = useState(undefined)
    const [outputAmount, setOutputAmount] = useState(undefined)
    const [transaction, setTransaction] = useState(undefined)
    const [loading, setLoading] = useState(undefined)
    const [ratio, setRatio] = useState(undefined)
    const [wethContract, setWethContract] = useState(undefined)
    const [uniContract, setUniContract] = useState(undefined)
    const [wethAmount, setWethAmount] = useState(undefined)
    const [uniAmount, setUniAmount] = useState(undefined)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

        const onLoad = async () => {
            const wethContract = getWethContract()
            setWethContract(wethContract)

            const uniContract = getUniContract()
            setUniContract(uniContract)
        }
        onLoad()
    }, [])

    const getSigner = async () => {
        try {
            if (window.ethereum) {
                const provider = new ethers.providers.Web3Provider(
                    window.ethereum
                )
                await provider.send("eth_requestAccounts", [])
                const providerAccounts = await provider.listAccounts()
                const signer = provider.getSigner()
                setProvider(provider)
                setSigner(signer)

                const walletAddress = providerAccounts[0]
                setSignerAddress(walletAddress)
            } else {
                console.error(
                    "Failed connecting to wallet, no ethereum found in your browser, please use the latest version of firefox browser or chromium browsers."
                )
            }

            // provider.send("eth_requestAccounts", []);
            // const signer = await provider.getSigner();
        } catch (err) {
            console.log(`ERROR :::: `, err)
            console.log("Please install MetaMask!")
            // window.location.href = "https://metamask.io/";

            if (
                err.message ===
                "Already processing eth_requestAccounts. Please wait."
            ) {
                window.ethereum.request({
                    method: "wallet_requestPermissions",
                    params: [{ eth_accounts: {} }],
                })
            }
        }
    }
    const isConnected = () => signer !== undefined
    const getWalletAddress = () => {
        signer.getAddress().then((address) => {
            setSignerAddress(address)

            // todo: connect weth and uni contracts
            wethContract.balanceOf(address).then((res) => {
                setWethAmount(Number(ethers.utils.formatEther(res)))
            })
            uniContract.balanceOf(address).then((res) => {
                setUniAmount(Number(ethers.utils.formatEther(res)))
            })
        })
    }

    if (signer !== undefined) {
        getWalletAddress()
    }

    const getSwapPrice = (inputAmount) => {
        setLoading(true)
        setInputAmount(inputAmount)

        console.log(`Deadline Minutes :::: `, deadlineMinutes)

        callPriceFeed(inputAmount).then((data) => {
            console.log(`DATA :::: `,data);
            setOutputAmount(data)
            setRatio(data)
            setLoading(false)
        })
    }

    return (
        <>
            <CommonSection
                title={"Rocket swap NFT Liquidity 2.0"}
                slogan={"Exchange Tokens Easy And Fast In Seconds"}
            />

            <section className="blog-page-2">
                <div className="appBody">
                    <div className="swapContainer">
                        <div className="swapHeader">
                            <span className="swapText">Swap</span>
                            <span
                                className="gearContainer"
                                onClick={() => setShowModal(true)}
                            >
                                <GearFill />
                            </span>
                            {showModal && (
                                <ConfigModal
                                    onClose={() => setShowModal(false)}
                                    setDeadlineMinutes={setDeadlineMinutes}
                                    deadlineMinutes={deadlineMinutes}
                                    setSlippageAmount={setSlippageAmount}
                                    slippageAmount={slippageAmount}
                                />
                            )}
                        </div>

                        <div className="swapBody">
                            <CurrencyField
                                field="input"
                                tokenName="WETH"
                                getSwapPrice={getSwapPrice}
                                signer={signer}
                                balance={wethAmount}
                            />
                            <CurrencyField
                                field="output"
                                tokenName="UNI"
                                value={outputAmount}
                                signer={signer}
                                balance={uniAmount}
                                spinner={BeatLoader}
                                loading={loading}
                            />
                        </div>

                        <div className="ratioContainer">
                            {ratio && <>{`1 UNI = ${ratio} WETH`}</>}
                        </div>

                        <div className="swapButtonContainer">
                            {isConnected() ? (
                                <div
                                    onClick={() => runSwap(transaction, signer)}
                                    className="swapButton"
                                >
                                    Swap
                                </div>
                            ) : (
                                <div
                                    onClick={() => getSigner(provider)}
                                    className="swapButton"
                                >
                                    Connect Wallet
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RocketSwap
