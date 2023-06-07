import React, { useState } from "react";
import "./nftcard.css";
import teamv04 from "../images/team-v04.png";
import nftimage from "../images/nftimage.jpg";
import author from "../images/author.jpg";
import topic4 from "../images/topics-4.png";
import Modal from "../Modal/Modal";


const NftCard = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <section>
              <div className="body">
                  <div className="nftcard">
                      <div className="card-container">
                          <div className="nftheader">
                              <img
                              src={teamv04}
                              alt="img"
                              className="nft-main-img"
                              />
                            </div>
                          <div className="nftmain">
                              <h2 className="nfttitle">NFT name</h2>
                              <p className="nftcontent">
                              Nft description
                              </p>
                          </div>
                          <div className="nfticons">
                              <div className="eth">
                                  <img src={nftimage} alt="eth" className="nft-icon-img"/>
                                  <span>0.0xx ETH</span>
                              </div>
                              <div className="nfttime">
                                  <img src={topic4} alt="time" width="20" height="20" />
                                  <span></span>
                              </div>
                          </div>
                          <div className="nftfooter">
                              <img src={author} alt="avatar" />
                              <p>Owned by <b>[author]</b></p>
                          </div>
                      </div>
                          
                      <div className="swapBtn">
                        <button id="swapButton"
                        onClick={() => setShowModal(true)}>
                          Swap
                        </button>
                      </div>
                  </div>               
                </div>
            </section>

            {showModal && (
              <Modal
                setShowModal={setShowModal}
              />
            )}
    </>
  );
};

export default NftCard;
