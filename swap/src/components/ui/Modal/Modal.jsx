import React, { useState } from "react";
import teamv04 from "../images/team-v04.png"
import "./modal.css";

const Modal = ({ setShowModal }) => {

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <h6 className="text-center text-light">Do you want to swap this NFT to get 10 LINKs?</h6>

        <div className="a">
          <img src={teamv04} alt="" className="nft__img"/>
        </div>

        <span className="close__modal">
          <i className="ri-close-line" onClick={() => setShowModal(false)}>X</i>
        </span>

        <button
          className="place__bid-btn"
        >
          Swap
        </button>
      </div>
    </div>
  );
};

export default Modal;
