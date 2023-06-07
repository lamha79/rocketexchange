import React, { useEffect } from "react"

import CommonSection from "../components/ui/Common-section/CommonSection"
import { Container, Row, Col } from "reactstrap"

const RocketSwap = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <CommonSection title={"Rocket swap NFT Liquidity 2.0"} />

            <section className="page-title">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="content">
                                <p className="desc">
                                    Exchange tokens easy and fast in seconds.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="blog-page-2">
                <div className="body">
                            <div className="swapContainer">
                                <div className="swapHeader">
                                    <span className="swapText">Swap</span>
                                    <span className="gearContainer">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 16 16"
                                            width="1em"
                                            height="1em"
                                            fill="currentColor"
                                        >
                                            <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
                                        </svg>
                                    </span>
                                </div>
                                <div className="swapBody">
                                    <div className="row currencyInput">
                                        <div className="col-md-6 numberContainer">
                                            <input
                                                className="currencyInputField"
                                                placeholder="0.0"
                                            />
                                        </div>
                                        <div className="col-md-6 tokenContainer">
                                            <span className="tokenName">
                                                WETH
                                            </span>
                                            <div className="balanceContainer">
                                                <span className="balanceAmount">
                                                    Balance:{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row currencyInput">
                                        <div className="col-md-6 numberContainer">
                                            <input
                                                className="currencyInputField"
                                                placeholder="0.0"
                                            />
                                        </div>
                                        <div className="col-md-6 tokenContainer">
                                            <span className="tokenName">
                                                UNI
                                            </span>
                                            <div className="balanceContainer">
                                                <span className="balanceAmount">
                                                    Balance:{" "}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ratioContainer"></div>
                                <div className="swapButtonContainer">
                                    <div className="swapButton">
                                        Connect Wallet
                                    </div>
                                </div>
                            </div>
                        </div>
            </section>
        </>
    )
}

export default RocketSwap
