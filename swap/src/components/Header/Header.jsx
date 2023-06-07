import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import { connectWallet, getCurrentWalletConnected } from "../../util/alchemy-core";
import "./header.css";
import rocketlogo from "../../assets/images/logo.jpg"

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
  }, []);

  const login = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const logOut = async () => {
    setStatus(null);
    setWallet("");
  };

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <header id="header_main" className="header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__body">
                  <div className="header__logo">
                    <a href="index-2">
                      <img id="site-logo" src={rocketlogo}
                        alt="ICOLand"
                        data-retina="/public/assets/images/logo/logo-main@x2.png" data-width="165"
                        data-height="40" />
                    </a>
                  </div>

                  <div className="header__right">
                    <nav id="main-nav" className="main-nav">
                      <ul id="menu-primary-menu" className="menu">
                        <li className="menu-item">
                          <Link to='/home'>Home</Link>
                        </li>
                        <li className="menu-item">
                          <Link to='/stacking'>NFT Stacking</Link>
                        </li>
                        <li className="menu-item">
                          <Link to='/swap'>Swap</Link>
                        </li>
                        <li className="menu-item">
                          <Link to='/contact'>Contact</Link>
                        </li>
                        <li className="menu-item">
                          <Link to='/admin'>Admin</Link>
                        </li>
                      </ul>
                    </nav>
                    <div className="group-button">
                      {walletAddress.length > 0 ? (
                        <>
                          <button
                            className="btn-action"
                            onClick={logOut}
                          >
                            Logout {String(walletAddress).substring(0, 6) + "..." + String(walletAddress).substring(38)}
                          </button>
                        </>
                      ) : (
                        <>
                          <button className="btn-action" onClick={login}>
                            <span>Connect Wallet</span>
                          </button>
                        </>
                      )}
                      <div className="mobile-button"><span></span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </Container>
    </header>
  );
};

export default Header;
