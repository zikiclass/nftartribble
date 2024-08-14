"use client";
import React, { useState } from "react";
import styles from "./css/connect.module.css";
import coinbase from "../../../public/coinbase.svg";
import passkey from "../../../public/passkey.svg";
import walletconnect from "../../../public/walletconnect.svg";
import bitgetwallet from "../../../public/bitgetwallet.svg";
import metamask from "../../../public/metamask.svg";
import torus from "../../../public/torus.svg";
import portis from "../../../public/portis.svg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";

const ConnectWallet = ({ crypto, closeConnect }) => {
  const cryptos = [
    { title: "Coinbase Wallet", icon: coinbase },
    { title: "Passkeys", icon: passkey },
    { title: "WalletConnect", icon: walletconnect },
    { title: "Install Bitget Wallet", icon: bitgetwallet },
    { title: "Install MetaMask", icon: metamask },
  ];
  const moreCryptos = [
    { title: "Torus", icon: torus },
    { title: "Portis", icon: portis },
  ];
  const [more, setMore] = useState(false);
  const [moreTitle, setMoreTitle] = useState("Show more");
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
        <h3>Connect Wallet</h3>
        <p>
          Get started with your <span>{crypto}</span> wallet to sign messages
          and send transactions
        </p>
        <span className={styles.popular}>Popular</span>

        <div className={styles.cryptos}>
          {cryptos.map((crypto, index) => (
            <div className={styles.crypto} key={index}>
              <Image
                src={crypto.icon}
                alt={crypto.title}
                className={styles.img}
              />
              <span>{crypto.title}</span>
            </div>
          ))}
        </div>
        {more && (
          <>
            <div className={styles.popular}>More</div>
            <div className={styles.cryptos}>
              {moreCryptos.map((crypto, index) => (
                <div className={styles.crypto} key={index}>
                  <Image
                    src={crypto.icon}
                    alt={crypto.title}
                    className={styles.img}
                  />
                  <span>{crypto.title}</span>
                </div>
              ))}
            </div>
          </>
        )}
        <div
          className={styles.button}
          onClick={() => {
            setMore(!more);
            moreTitle === "Show more"
              ? setMoreTitle("Show less")
              : setMoreTitle("Show more");
          }}
        >
          {moreTitle}
        </div>
        <div className={styles.button} onClick={handleContainerClick}>
          Cancel
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
