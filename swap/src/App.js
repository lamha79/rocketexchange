import React, { useState } from "react";
import Layout from "./components/Layout";
import { SigninContext } from "./WalletConnectContext";
import "./app.css";

export default function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [inputAmount, setInputAmount] = useState(undefined);
  const [outputAmount, setOutputAmount] = useState(undefined);
  const [linkAmount, setLinkAmount] = useState(0);
  const [wethAmount, setWethAmount] = useState(0);

  return (
      <SigninContext.Provider
        value={{ isConnected, setIsConnected, provider, setProvider, 
          walletAddress, setWalletAddress, status, setStatus, signer, setSigner,
          inputAmount, setInputAmount, outputAmount, setOutputAmount,
          linkAmount, setLinkAmount, wethAmount, setWethAmount }}>
        <Layout />
      </SigninContext.Provider>
  );
}
