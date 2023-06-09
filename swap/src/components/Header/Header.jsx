import React, { useEffect, useState, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import { Container } from "reactstrap"
import {
    connectWalletSync,
    getCurrentWalletConnectedSync,
} from "../../util/alchemy-core"
import { SigninContext } from "../../WalletConnectContext"
import "./header.css"
import rocketlogo from "../../assets/images/logo.jpg"

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
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

    useEffect(async () => {
        if (provider != undefined || provider != null) {
            const { address, status, isConnected, provider } =
                await getCurrentWalletConnectedSync(provider)
            setWalletAddress(address)
            setStatus(status)
            setIsConnected(isConnected)
            setProvider(provider)
            setSigner(signer)
        }
    }, [])

    const login = async () => {
        const walletResponse = await connectWalletSync(provider)
        setStatus(walletResponse.status)
        setWalletAddress(walletResponse.address)
        setIsConnected(walletResponse.isConnected)
        setProvider(walletResponse.provider)
        setSigner(walletResponse.signer)
    }

    const logOut = async () => {
        setStatus(null)
        setWalletAddress("")
        setIsConnected(false)
        setProvider(null)
        setSigner(null)
        setInputAmount("")
        setOutputAmount("")
        setLinkAmount(0)
        setWethAmount(0)
    }

    const toggleMenu = () => menuRef.current.classList.toggle("active__menu")

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <header id="header_main" className="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header__body">
                                    <div className="header__logo">
                                        <a href="index-2">
                                            <img
                                                id="site-logo"
                                                src={rocketlogo}
                                                alt="ICOLand"
                                                data-retina="/public/assets/images/logo/logo-main@x2.png"
                                                data-width="165"
                                                data-height="40"
                                            />
                                        </a>
                                    </div>

                                    <div className="header__right">
                                        <nav id="main-nav" className="main-nav">
                                            <ul
                                                id="menu-primary-menu"
                                                className="menu"
                                            >
                                                <li className="menu-item">
                                                    <Link to="/home">Home</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/staking">
                                                        NFT Staking
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/swap">Swap</Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                                <li className="menu-item">
                                                    <Link to="/admin">
                                                        Admin
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        <div className="group-button">
                                            {isConnected ? (
                                                <>
                                                    <button
                                                        className="btn-action"
                                                        onClick={logOut}
                                                    >
                                                        Logout{" "}
                                                        {String(
                                                            walletAddress
                                                        ).substring(0, 6) +
                                                            "..." +
                                                            String(
                                                                walletAddress
                                                            ).substring(38)}
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        className="btn-action"
                                                        onClick={login}
                                                    >
                                                        <span>
                                                            Connect Wallet
                                                        </span>
                                                    </button>
                                                </>
                                            )}
                                            <div className="mobile-button">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </Container>
        </header>
    )
}

export default Header
