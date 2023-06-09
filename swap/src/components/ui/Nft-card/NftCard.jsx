import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./nftcard.css";


const NftCard = ({ nftData }) => {

  console.log(nftData)

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section>
        <div className="body">
          <div className="nftcard">
            <div className="card-container">
              <div className="nftheader">
                <img
                  src={nftData.rawMetadata.image}
                  alt="img"
                  className="nft-main-img"
                />
              </div>
              <div className="nftmain">
                <h2 className="nfttitle">{nftData.title} #{nftData.tokenId}</h2>
                <p className="nftcontent">
                  {nftData.description}
                </p>
              </div>
              <div className="nfticons">
                <div className="eth">
                  {/* <span>0.0xx ETH</span> */}
                </div>
                <div className="nfttime">
                  {/* <img src={nftData.media[0]} alt="time" width="20" height="20" /> */}
                  <span></span>
                </div>
              </div>
            </div>

            <div className="swapBtn">
              <button id="swapButton"
                onClick={() => setShowModal(true)}>
                Staking
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <Modal
          nftData={nftData}
          setShowModal={setShowModal}
        />
      )}
    </>
  );
};

export default NftCard;
