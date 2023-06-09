import { useState, useEffect, useContext } from "react"
import { ethers } from "ethers"
import { GearFill } from "react-bootstrap-icons"

import CommonSection from "../components/ui/Common-section/CommonSection"
import "../styles/swap.css"
import PageButton from "../components/PageButton"
import ConnectButton from "../components/ConnectButton"
import ConfigModal from "../components/ConfigModal"
import CurrencyField from "../components/CurrencyField"
// import detectEthereumProvider from "@metamask/detect-provider";
import { SigninContext } from "../WalletConnectContext"
import BeatLoader from "react-spinners/BeatLoader"
import {
    getWethContract,
    getLinkContract,
    runSwap,
} from "../AlphaRouterService"

import { callPriceFeed } from "../CallPriceFeedChainlink"

const RocketSwap = () => {
    const [slippageAmount, setSlippageAmount] = useState(2)
    const [deadlineMinutes, setDeadlineMinutes] = useState(10)
    const [showModal, setShowModal] = useState(undefined)

    const [transaction, setTransaction] = useState(undefined)
    const [loading, setLoading] = useState(undefined)
    const [ratio, setRatio] = useState(undefined)
    const [wethContract, setWethContract] = useState(undefined)
    const [linkContract, setLinkContract] = useState(undefined)

    const {
        isConnected,
        setIsConnected,
        provider,
        setProvider,
        walletAddress,
        setWalletAddress,
        setStatus,
        signer,
        setSigner,
        inputAmount, 
        setInputAmount, 
        outputAmount, 
        setOutputAmount,
        linkAmount, 
        setLinkAmount, 
        wethAmount, 
        setWethAmount,
    } = useContext(SigninContext)

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

        const onLoad = async () => {
            const wethContract = getWethContract()
            setWethContract(wethContract)

            const linkContract = getLinkContract()
            setLinkContract(linkContract)
        }
        onLoad()
    }, [])

    const getSigner = async () => {
        try {
            if (window.ethereum) {
                if (provider == null) {
                    let _provider = new ethers.providers.Web3Provider(
                        window.ethereum
                    )
                    await _provider.send("eth_requestAccounts", [])
                    const providerAccounts = await _provider.listAccounts()
                    const signer = _provider.getSigner()
                    setProvider(_provider)
                    setSigner(signer)

                    if (
                        providerAccounts !== undefined &&
                        providerAccounts.length > 0
                    ) {
                        const walletAddress = providerAccounts[0]
                        setWalletAddress(walletAddress)
                        setStatus("Success")
                        setIsConnected(true)
                    } else {
                        setWalletAddress("")
                        setStatus(
                            "🦊 Connect to Metamask using the top right button."
                        )
                        setProvider(null)
                        setIsConnected(false)
                    }
                } else {
                    const signer = provider.getSigner()
                    setSigner(signer)

                    setWalletAddress(walletAddress)
                    setStatus("Connected")
                    setIsConnected(false)
                }
            } else {
                console.error(
                    "Failed connecting to wallet, no ethereum found in your browser, please use the latest version of firefox browser or chromium browsers."
                )
                setWalletAddress("")
                setStatus(
                    "🦊 Failed connecting to wallet, no ethereum found in your browser, please use the latest version of firefox browser or chromium browsers."
                )
                setProvider(null)
                setIsConnected(false)
            }
        } catch (err) {
            console.log(`ERROR :::: `, err)
            console.log("Please install MetaMask!")
            // window.location.href = "https://metamask.io/";

            if (
                err.message ===
                "Already processing eth_requestAccounts. Please wait."
            ) {
                setWalletAddress("")
                setStatus(
                    "Already processing eth_requestAccounts. Please wait."
                )
                setProvider(null)
                setIsConnected(false)
            }

            setWalletAddress("")
            setStatus(
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
            )
            setProvider(null)
            setIsConnected(false)
        }
    }

    const getWalletAddress = () => {
        console.log(`WALLET ADDRESS :::: `,walletAddress);
        // todo: connect weth and link contracts
        wethContract.balanceOf(walletAddress).then((res) => {
            setWethAmount(Number(ethers.utils.formatEther(res)))
        })
        linkContract.balanceOf(walletAddress).then((res) => {
            setLinkAmount(Number(ethers.utils.formatEther(res)))
        })
    }

    if (signer !== undefined && isConnected) {
        getWalletAddress()
    }

    const getSwapPrice = (inputAmount) => {
        setLoading(true)
        setInputAmount(inputAmount)

        console.log(`Deadline Minutes :::: `, deadlineMinutes)

        callPriceFeed().then((data) => {
            console.log(`DATA :::: `, data)
            setOutputAmount(Number(data * inputAmount))
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
                                tokenName="LINK"
                                value={inputAmount}
                                getSwapPrice={getSwapPrice}
                                isConnected={isConnected}
                                balance={linkAmount}
                            />
                            <CurrencyField
                                field="output"
                                tokenName="WETH"
                                value={outputAmount}
                                isConnected={isConnected}
                                balance={wethAmount}
                                spinner={BeatLoader}
                                loading={loading}
                            />
                        </div>

                        <div className="ratioContainer">
                            {ratio && <>{`1 LINK = ${ratio} WETH`}</>}
                        </div>

                        <div className="swapButtonContainer">
                            {isConnected ? (
                                <div
                                    onClick={() => runSwap(transaction, signer)}
                                    className="swapButton"
                                >
                                    Swap
                                </div>
                            ) : (
                                <div
                                    onClick={() => getSigner()}
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
