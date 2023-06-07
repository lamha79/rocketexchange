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

            
        </>
        
    )
}

export default NftStacking
