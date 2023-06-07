import React, { useState } from "react";
import "./modal.css";

const SaleModal = ({ setShowModal }) => {

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <h6 className="text-center text-light">Listing</h6>

        <div className="nft__img">
          <img src="" alt="" className="w-100" />
        </div>

        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}>X</i>
        </span>

        <div className="input__item mb-4">
          <input
            type="number"
            placeholder="0 NEAR"
          />
        </div>

        <button
          className="place__bid-btn"
        >
          Sale
        </button>
      </div>
    </div>
  );
};

export default SaleModal;
