import React, { useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";

const Home = ({ isSignedIn, nftMarketplace, wallet }) => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <HeroSection />
      <LiveAuction
        isSignedIn={isSignedIn}
        nftMarketplace={nftMarketplace}
        wallet={wallet}
      />
      {/* <SellerSection /> */}
      {/* <Trending /> */}
      {/* <StepSection /> */}
    </>
  );
};

export default Home;
