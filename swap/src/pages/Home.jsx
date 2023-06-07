import React, { useEffect } from "react";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <>
      <HeroSection />
      
      {/* <SellerSection /> */}
      {/* <Trending /> */}
      {/* <StepSection /> */}
    </>
  );
};

export default Home;
