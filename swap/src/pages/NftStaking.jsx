import React, { useEffect } from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

import NftAvailable from "../components/ui/Nft-available/NftAvailable";
import NftSwapped from "../components/ui/Nft-swapped/NftSwapped";


const NftStaking = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <CommonSection title={"NFT Staking"} slogan={"Please send your NFT here to receive 1 token"} />            
            <NftAvailable/>
            <NftSwapped />
        </>
        
    )
}

export default NftStaking
