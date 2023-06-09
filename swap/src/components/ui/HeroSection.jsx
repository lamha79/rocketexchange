import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "./hero-section.css";

import heroImg from "../../assets/images/hero.jpg";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
              <span>DeFi Rocket Swap NFT Liquidity 2.0</span>{" "}
              </h2>
              <p>
                On our platform, users can stake NFT for quick tokens. 
                After receiving some tokens from NFT staking, 
                users can use those tokens for numerous purposes, 
                such as swapping them directly on our built-in swap platform or using them to participate in other crypto market activities.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
