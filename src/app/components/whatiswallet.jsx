"use client";
import React, { useState } from "react";
import styles from "./css/whatiswallet.module.css";
import CloseIcon from "@mui/icons-material/Close";
import { name } from "../../../env";
const WhatisWallet = ({ closeConnect }) => {
  const handleContainerClick = (event) => {
    closeConnect();
  };
  const handleCryptosClick = (event) => {
    event.stopPropagation();
  };
  return (
    <div className={styles.container} onClick={handleContainerClick}>
      <div className={styles.close}>
        <CloseIcon />
      </div>
      <div className={styles.connect} onClick={handleCryptosClick}>
        <h3>What is a wallet?</h3>
        <p>
          A crypto wallet is a software on a blockchain (such as Ethereum) that
          stores your cryptocurrency, private keys and other crypto assets -
          including NFTs.
        </p>
        <p>A crypto wallet lets you create:</p>
        <ul>
          <li>on-chain transactions</li>
          <li>sign messages</li>
          <li> add funds to your wallet</li>
          <li> sell, buy and manage your NFTs</li>
        </ul>
        <p>
          Your crypto wallet lets you connect to a decentralized application
          (dApp) like {name}.
        </p>

        <div className={styles.button} onClick={handleContainerClick}>
          Close
        </div>
      </div>
    </div>
  );
};

export default WhatisWallet;
