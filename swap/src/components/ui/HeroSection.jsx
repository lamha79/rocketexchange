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
              {/* <h2>
                Chương trình phân tích token{" "}
                <span>BNB, ETH, POLY, FTM và DC Chain miễn phí</span>
              </h2>
              <p>
                Cảnh báo: trang web này giúp bạn xác định xem hợp đồng thông
                minh có thể là lừa đảo hay không ? Không có đảm bảo 100%. Chúng
                tôi đang cố gắng làm hết sức mình để phát hiện tất cả các trò
                gian lận nhưng chúng tôi không thể chịu trách nhiệm cho một trò
                gian lận cụ thể ... Hãy luôn cẩn thận với tiền của bạn.
              </p> */}
              <h2>
                Free Token Analyzer Program{" "}
                <span>BNB, ETH, POLY, FTM & DC Chain</span>
              </h2>
              <p>
                Warning : this website help you to determine if a smart contract
                could be a scam, without 100% guarantee. We are trying to do our
                best to detect all the scams but we could not be responsible for
                a specific malicious one... Always be careful with your money
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/bnbchain">BNB Chain</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/ethchain">ETH Chain</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/polychain">POLY Chain</Link>
                </button>
              </div>
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