import React, { useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { Container } from "reactstrap";
import "./header.css";

const NAV__LINKS = [
  {
    display: "BNB",
    url: "/bnbchain",
  },
  {
    display: "ETH",
    url: "/ethchain",
  },
  {
    display: "POLY",
    url: "/polychain",
  },
  {
    display: "FTM",
    url: "/ftmchain",
  },
  {
    display: "DC",
    url: "/dcchain",
  },
];

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
      
    {/* <div class="preloader">
        <div class=" loader">
            <div class="square"></div>
            <div class="path">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
          <p class="text-load">Loading :</p>
        </div>
    </div> 
    
		<div class="mouse-cursor cursor-outer"></div>
		<div class="mouse-cursor cursor-inner"></div> */}

    <header id="header_main" class="header">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="header__body">
                        <div class="header__logo">
                            <a href="index-2">
                                <img id="site-logo" src="/public/assets/images/logo/rocketlogo.jpg"
                                alt="ICOLand" width="165" height="40"
                                data-retina="/public/assets/images/logo/logo-main@x2.png" data-width="165"
                                data-height="40" />
                            </a>
                        </div>

                        <div class="header__right">
                            <nav id="main-nav" class="main-nav">
                                <ul id="menu-primary-menu" class="menu">
                                    <li class="menu-item menu-item-has-children current-menu-item">
                                        <a href="#">Home Page</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="index-2">Home Main</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">Home Dashboad</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="dashboard-tokensales">Token Sales</a></li>
                                            <li class="menu-item"><a href="dashboard-roadmap">Road Map</a></li>
                                            <li class="menu-item"><a href="dashboard-team">Our Team</a></li>
                                            <li class="menu-item"><a href="dashboard-faq">FaQs</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">NFT Stacking And Swap Token</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="swap">SwapToken</a></li>
                                            <li class="menu-item"><a href="blog-v2">NFT Stacking</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item">
                                        <a href="connect-wallet">Connect Wallet</a>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">More</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="about-us">About Us</a></li>
                                            <li class="menu-item"><a href="features">Features</a></li>
                                            <li class="menu-item"><a href="roadmap">Road Map</a></li>
                                            <li class="menu-item"><a href="document">Documents</a></li>
                                            <li class="menu-item"><a href="our-team">Our Team</a></li>
                                            <li class="menu-item"><a href="partner">Partner</a></li>
                                            <li class="menu-item"><a href="token-sales">Token Sale</a></li>
                                            <li class="menu-item"><a href="button">Function</a></li>
                                            
                                            <li class="menu-item"><a href="footer">Contact</a></li>
                                            
                                            
                                            <li class="menu-item"><a href="faq">Faq</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children">
                                        <a href="#">Sign</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="sign-in">Sign In</a></li>
                                            <li class="menu-item"><a href="sign-up">Sign Up</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                            <div class="group-button">
                                <a class="btn-action" href="sign-in">
                                    <span>Wallet Connect</span>
                                </a>
                            </div>
                            <div class="mobile-button"><span></span></div>
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
