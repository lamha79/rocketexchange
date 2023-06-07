import React, { useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import teamv04 from "../assets/images/team-v04.png";
import nftimage from "../assets/images/nftimage.jpg";
import author from "../assets/images/author.jpg";
import topic4 from "../assets/images/topics-4.png";
import NftCard from "../components/ui/Nft-card/NftCard";


const NftStacking = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <CommonSection title={"NFT Stacking"} slogan={"Please send your NFT here to receive 1 token"} />            
            <NftCard/>
        </>
        
    )
}

export default NftStacking
