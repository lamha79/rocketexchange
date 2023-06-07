import React, { useRef, useEffect } from "react"

import CommonSection from "../components/ui/Common-section/CommonSection"
import { Container, Row, Col } from "reactstrap"

const Contact = () => {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const subjectRef = useRef("")
    const messageRef = useRef("")

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <CommonSection tittle="Contact" />
            <section>
                <Container>
                    <Row>
                        <section
                            class="page-title"
                            style="padding-top: 50px;padding-bottom: 0;"
                        >
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div
                                            class="content"
                                            style="padding: 0 388px;"
                                        >
                                            <h2 class="title">
                                                Rocketswap NFT Liquidity 2.0
                                            </h2>
                                            <p class="desc">
                                                Exchange tokens easy and fast in
                                                seconds.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section
                            class="blog-page-2"
                            style="padding: 20px 0 20px;"
                        >
                            <div class="body" style="min-height: 0px;">
                                <div class="swapContainer">
                                    <div class="swapHeader">
                                        <span class="swapText">Swap</span>
                                        <span class="gearContainer">
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
                                    <div class="swapBody">
                                        <div class="row currencyInput">
                                            <div class="col-md-6 numberContainer">
                                                <input
                                                    class="currencyInputField"
                                                    placeholder="0.0"
                                                    value=""
                                                />
                                            </div>
                                            <div class="col-md-6 tokenContainer">
                                                <span class="tokenName">
                                                    WETH
                                                </span>
                                                <div class="balanceContainer">
                                                    <span class="balanceAmount">
                                                        Balance:{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row currencyInput">
                                            <div class="col-md-6 numberContainer">
                                                <input
                                                    class="currencyInputField"
                                                    placeholder="0.0"
                                                    value=""
                                                />
                                            </div>
                                            <div class="col-md-6 tokenContainer">
                                                <span class="tokenName">
                                                    UNI
                                                </span>
                                                <div class="balanceContainer">
                                                    <span class="balanceAmount">
                                                        Balance:{" "}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ratioContainer"></div>
                                    <div class="swapButtonContainer">
                                        <div class="swapButton">
                                            Connect Wallet
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact
