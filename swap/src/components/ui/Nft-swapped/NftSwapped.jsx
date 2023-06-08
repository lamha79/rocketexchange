import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./nft-swapped.css";
import NftCard from "../Nft-card/NftCard";

const NftSwapped = ({ isSignedIn, nftMarketplace, wallet }) => {
  const [sales, setSales] = useState([]);

  async function fetchSales() {
    // let data = await nftMarketplace.getSales();
    setSales(['orange', 'apple', 'watermelon', 'melon']);
  }

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Swapped Nfts</h3>
              <span>
                <Link to="/swappednfts">Explore more</Link>
              </span>
            </div>
          </Col>

          {/* {sales?.slice(0, 4).map((item) => (
            <Col lg="3" key={item}>
              <NftCard />
            </Col>
          ))} */}
        </Row>
      </Container>
    </section>
  );
};

export default NftSwapped;
