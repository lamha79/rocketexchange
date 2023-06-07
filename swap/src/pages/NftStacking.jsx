import React, { useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

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
