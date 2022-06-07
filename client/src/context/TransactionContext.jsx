import React, { useEffect, useState, createContext } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  console.log({
    provider,
    signer,
    transactionContract,
  });
};

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) {
      console.log("no ethereum ");
      return alert("Please Install Metamask Wallet");
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log("accounts: ", accounts);
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please Install Metamask Wallet");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <TransactionContext.Provider value={{ val: "foo bar koo" }}>
      {children}
    </TransactionContext.Provider>
  );
};
