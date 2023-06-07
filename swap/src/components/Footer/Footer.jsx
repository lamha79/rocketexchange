import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import "./footer.css";

const MY__ACCOUNT = [
  {
    display: "Author Profile",
    url: "/profile",
  },
  {
    display: "Create Item",
    url: "/create",
  },
  {
    display: "Collection",
    url: "/market",
  },
];

const RESOURCES = [
  {
    display: "Help Center",
    url: "#",
  },
  {
    display: "Partner",
    url: "#",
  },
  {
    display: "Community",
    url: "#",
  },
  {
    display: "Activity",
    url: "#",
  },
];

const COMPANY = [
  {
    display: "About",
    url: "#",
  },
  {
    display: "Career",
    url: "#",
  },
  {
    display: "Ranking",
    url: "#",
  },
  {
    display: "Contact Us",
    url: "/contact",
  },
];

const Footer = () => {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row>
        <footer class="footer style-2">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="content">
                            <h3 class="">Don't miss out</h3>
                            <form action="#" id="subscribe-form">
                                <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                <button class="btn-action s2" type="submit" id="subscribe-button"> <span class="effect">SUBSCRIBE</span></button>
                            </form>
                            <p>Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>
                            <ul class="list-social">
                                <li><a href="#"><span class="icon-twitter"></span></a></li>
                                <li><a href="#"><span class="icon-facebook"></span></a></li>
                                <li><a href="#"><span class="icon-place"></span></a></li>
                                <li><a href="#"><span class="icon-youtobe"></span></a></li>
                                <li><a href="#"><span class="icon-tiktok"></span></a></li>
                                <li><a href="#"><span class="icon-reddit"></span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-5">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p>© 2023. All rights reserved by Rocket Exchange</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <a id="scroll-top"></a>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
