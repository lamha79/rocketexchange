import React from "react";
import { Link } from "react-router-dom";

import "./common-section.css";

import { Container } from "reactstrap";

const SUBMENU__BNBCHAIN = [
  {
    display: "SCAN",
    url: "/bnbchain/scan",
  },
  {
    display: "LAST SCANNED",
    url: "/bnbchain/latestscanned",
  },
  {
    display: "NEWESTS",
    url: "/bnbchain/latestnewtoken",
  },
  {
    display: "TOP",
    url: "/bnbchain/top",
  },
  {
    display: "LATEST SCAMS",
    url: "/bnbchain/latestscam",
  },
];

const SUBMENU__ETHCHAIN = [
  {
    display: "SCAN",
    url: "/ethchain/scan",
  },
  {
    display: "LAST SCANNED",
    url: "/ethchain/latestscanned",
  },
  {
    display: "NEWESTS",
    url: "/ethchain/latestnewtoken",
  },
  {
    display: "TOP",
    url: "/ethchain/top",
  },
  {
    display: "LATEST SCAMS",
    url: "/ethchain/latestscam",
  },
];

const SUBMENU__POLYCHAIN = [
  {
    display: "SCAN",
    url: "/polychain/scan",
  },
  {
    display: "LAST SCANNED",
    url: "/polychain/latestscanned",
  },
  {
    display: "NEWESTS",
    url: "/polychain/latestnewtoken",
  },
  {
    display: "TOP",
    url: "/polychain/top",
  },
  {
    display: "LATEST SCAMS",
    url: "/polychain/latestscam",
  },
];

const SUBMENU__FTMCHAIN = [
  {
    display: "SCAN",
    url: "/ftmchain/scan",
  },
  {
    display: "LAST SCANNED",
    url: "/ftmchain/latestscanned",
  },
  {
    display: "NEWESTS",
    url: "/ftmchain/latestnewtoken",
  },
  {
    display: "TOP",
    url: "/ftmchain/top",
  },
  {
    display: "LATEST SCAMS",
    url: "/ftmchain/latestscam",
  },
];

const SUBMENU__DCCHAIN = [
  {
    display: "SCAN",
    url: "/dcchain/scan",
  },
  {
    display: "LAST SCANNED",
    url: "/dcchain/latestscanned",
  },
  {
    display: "NEWESTS",
    url: "/dcchain/latestnewtoken",
  },
  {
    display: "TOP",
    url: "/dcchain/top",
  },
  {
    display: "LATEST SCAMS",
    url: "/dcchain/latestscam",
  },
];

const CommonSection = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
        {title === "BNB Chain" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className="submenu" to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "BNB Chain Scan" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className={item.display === 'SCAN' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "BNB Chain Latest Scanned" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className={item.display === 'LAST SCANNED' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "BNB Chain Latest New Token" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className={item.display === 'NEWESTS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "BNB Chain Latest Scam" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className={item.display === 'LATEST SCAMS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "BNB Chain Top" &&
          SUBMENU__BNBCHAIN.map((item, index) => (
            <Link className={item.display === 'TOP' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className="submenu" to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain Scan" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className={item.display === 'SCAN' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain Latest Scanned" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className={item.display === 'LAST SCANNED' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain Latest New Token" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className={item.display === 'NEWESTS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain Latest Scam" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className={item.display === 'LATEST SCAMS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "ETH Chain Top" &&
          SUBMENU__ETHCHAIN.map((item, index) => (
            <Link className={item.display === 'TOP' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className="submenu" to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain Scan" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className={item.display === 'SCAN' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain Latest Scanned" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className={item.display === 'LAST SCANNED' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain Latest New Token" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className={item.display === 'NEWESTS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain Latest Scam" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className={item.display === 'LATEST SCAMS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "POLY Chain Top" &&
          SUBMENU__POLYCHAIN.map((item, index) => (
            <Link className={item.display === 'TOP' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className="submenu" to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain Scan" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className={item.display === 'SCAN' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain Latest Scanned" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className={item.display === 'LAST SCANNED' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain Latest New Token" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className={item.display === 'NEWESTS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain Latest Scam" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className={item.display === 'LATEST SCAMS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "FTM Chain Top" &&
          SUBMENU__FTMCHAIN.map((item, index) => (
            <Link className={item.display === 'TOP' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className="submenu" to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain Scan" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className={item.display === 'SCAN' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain Latest Scanned" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className={item.display === 'LAST SCANNED' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain Latest New Token" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className={item.display === 'NEWESTS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain Latest Scam" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className={item.display === 'LATEST SCAMS' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
        {title === "DC Chain Top" &&
          SUBMENU__DCCHAIN.map((item, index) => (
            <Link className={item.display === 'TOP' ? "submenu active": "submenu"} to={item.url}>
              {item.display}
            </Link>
          ))
        }
      </Container>
    </section>
  );
};

export default CommonSection;
