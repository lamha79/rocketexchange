import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }

      return () => {
        window.removeEventListener("scroll");
      };
    });

    // const scriptSticky = document.createElement("script");

    // scriptSticky.src = "https://coinzillatag.com/lib/sticky.js";

    // scriptSticky.async = true;

    // document.body.appendChild(scriptSticky);

    // const scriptDisplay = document.createElement("script");

    // scriptDisplay.src = "https://coinzillatag.com/lib/display.js";

    // scriptDisplay.async = true;

    // document.body.appendChild(scriptDisplay);

    // const scriptCoinZillaHeader = document.createElement("script");
    // scriptCoinZillaHeader.type = "text/javascript";
    // scriptCoinZillaHeader.async = true;
    // scriptCoinZillaHeader.innerHTML = `window.coinzilla_display = window.coinzilla_display || [];
    // var c_display_preferences = {};
    // c_display_preferences.zone = "99160ab2b85d5def248";
    // c_display_preferences.width = "728";
    // c_display_preferences.height = "90";
    // coinzilla_display.push(c_display_preferences);`;
    // document.body.appendChild(scriptCoinZillaHeader);

    // const scriptCoinZillaFooter = document.createElement("script");
    // scriptCoinZillaFooter.type = "text/javascript";
    // scriptCoinZillaFooter.async = true;
    // scriptCoinZillaFooter.innerHTML = `window.coinzilla_sticky = window.coinzilla_sticky || [];
    // function czilla() { 
    //   coinzilla_sticky.push(arguments);
    // } 
    // czilla('6760ab2b85d73b8239');`;
    // document.body.appendChild(scriptCoinZillaFooter);

    // return () => {
    //   // clean up the script when the component in unmounted
    //   document.body.removeChild(scriptSticky);
    //   document.body.removeChild(scriptDisplay);
    //   document.body.removeChild(scriptCoinZillaHeader);
    //   document.body.removeChild(scriptCoinZillaFooter);
    // };
  }, []);

  const toggleMenu = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header" ref={headerRef}>
      <Container>
      
    {/* <div className ="preloader">
        <div className =" loader">
            <div className ="square"></div>
            <div className ="path">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          <p className ="text-load">Loading :</p>
        </div>
    </div> 
    
		<div className ="mouse-cursor cursor-outer"></div>
		<div className ="mouse-cursor cursor-inner"></div> */}

    <header id="header_main" className ="header">
        <div className ="container">
            <div className ="row">
                <div className ="col-12">
                    <div className ="header__body">
                        <div className ="header__logo">
                            <a href="index-2">
                                <img id="site-logo" src="/public/assets/images/logo/rocketlogo.jpg"
                                alt="ICOLand" width="165" height="40"
                                data-retina="/public/assets/images/logo/logo-main@x2.png" data-width="165"
                                data-height="40" />
                            </a>
                        </div>

                        <div className ="header__right">
                            <nav id="main-nav" className ="main-nav">
                                <ul id="menu-primary-menu" className ="menu">
                                    <li className ="menu-item current-menu-item">
                                        <Link to='/home'>Home</Link>
                                    </li>
                                    <li className ="menu-item">
                                        <Link to='/nftswap'>NFT Stacking</Link>
                                    </li>
                                    <li className ="menu-item">
                                        <Link to='/swap'>Swap</Link>
                                    </li>
                                </ul>
                            </nav>
                            <div className ="group-button">
                                <a className ="btn-action" href="sign-in">
                                    <span>Wallet Connect</span>
                                </a>
                            </div>
                            <div className ="mobile-button"><span></span></div>
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
