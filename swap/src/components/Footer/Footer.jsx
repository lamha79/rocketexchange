import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap"
import "./footer.css"

const Footer = () => {
    const [date, setDate] = useState()
    const getYear = () => setDate(new Date().getFullYear())

    useEffect(() => {
        getYear()
    }, [])

    return (
        <footer className="footer style-2">
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="content">
                                <h3 className="">Don't miss out</h3>
                                <form action="#" id="subscribe-form">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        required=""
                                        id="subscribe-email"
                                    />
                                    <button
                                        className="btn-action s2"
                                        type="submit"
                                        id="subscribe-button"
                                    >
                                        {" "}
                                        <span className="effect">
                                            SUBSCRIBE
                                        </span>
                                    </button>
                                </form>
                                <p>
                                    Don’t hesitate to subscribe to latest news
                                    about ICo markets as well as crucial
                                    financial knowledge to become successful
                                    investors globally
                                </p>
                                <ul className="list-social">
                                    <li>
                                        <Link to="#">
                                            <span className="icon-twitter"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon-facebook"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon-place"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon-youtobe"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon-tiktok"></span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <span className="icon-reddit"></span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className="md-5"></Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__bottom center">
                <Container>
                    <Row>
                        <Col lg="12">
                            <p>
                                © 2023. All rights reserved by Rocket Exchange
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
