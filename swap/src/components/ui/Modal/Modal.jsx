import React, { useState } from "react";
import "./modal.css";

const Modal = ({ nftData, setShowModal }) => {

  console.log(nftData)

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <h6 className="text-center text-light">Do you want to staking this NFT to get 2 LINKs?</h6>

        <div className="a">
          <img src={nftData.rawMetadata.image} alt="" className="nft__img"/>
        </div>

        <span className="close__modal">
          <div className="ri-close-line" onClick={() => setShowModal(false)}>X</div>
        </span>

        <button
          className="place__bid-btn"
        >
          Staking
        </button>
      </div>
    </div>
  );
};

export default Modal;
