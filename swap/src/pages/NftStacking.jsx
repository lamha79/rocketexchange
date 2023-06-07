import React, { useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import teamv04 from "../assets/images/team-v04.png";
import nftimage from "../assets/images/nftimage.jpg";
import author from "../assets/images/author.jpg";
import topic4 from "../assets/images/topics-4.png";


const NftStacking = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <CommonSection title={"Rocket Staking NFT Liquidity 2.0"} />

            <section className="page-title">
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="content">
                                <h2 className="title">NFT Stacking</h2>
                                <p className="desc">Please send your NFT here to receive 1 token</p>
                            </div>
                        </Col>
                    </Row>
                </Container>               
            </section>

            <section className="blog-page-2">
                <div className="body">
                    <div className="nftcard">
                        <div className="card-container">
                            <div className="nftheader">
                                <img
                                src={teamv04}
                                alt="img"
                                className="nft-main-img"
                                />
                            <div className="nftmain">
                                <h2 className="nfttitle">NFT name</h2>
                                <p className="nftcontent">
                                Nft description
                                </p>
                            </div>
                            <div className="nfticons">
                                <div className="eth">
                                    <img src={nftimage} alt="eth" className="nft-icon-img"/>
                                    <span>0.0xx ETH</span>
                                </div>
                                <div className="nfttime">
                                    <img src={topic4} alt="time" width="20" height="20" />
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div className="nftdivider"></div>
                            <div className="nftfooter">
                                <img src={author} alt="avatar" />
                                <p>Owned by <b>[author]</b></p>
                            </div>
                        </div>
                    </div>    
                </div>
            </section>
        </>
        
    )
}

export default NftStacking
