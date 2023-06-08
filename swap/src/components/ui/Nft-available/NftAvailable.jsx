import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { getCurrentWalletConnected } from "../../../util/alchemy-core";
import { getWalletNFTs } from "../../../util/alchemy-nft";
import NftCard from "../Nft-card/NftCard";
import "./nft-available.css";

const NftAvailable = () => {
  const [userNFTs, setUserNFTs] = useState([]);

  async function fetchAllUserNFTs() {
    const { address } = await getCurrentWalletConnected();

    if (address.length > 0) {
      let nfts = await getWalletNFTs(address);
      console.log(nfts)
      setUserNFTs(nfts.ownedNfts)
    }
  }

  useEffect(() => {
    fetchAllUserNFTs();
  }, []);

  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Available NFTs</h3>
              <span>
                <Link to="/nfts">Explore more</Link>
              </span>
            </div>
          </Col>

          {userNFTs?.map((nftData) => (
            <Col lg="3">
              <NftCard nftData={nftData} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default NftAvailable;
