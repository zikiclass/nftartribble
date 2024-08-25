"use client";
import React, { useState } from "react";
import styles from "./style.module.css";
import { name } from "../../../env";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import coinbase from "../../../public/coinbase.svg";
import passkey from "../../../public/passkey.svg";
import walletconnect from "../../../public/walletconnect.svg";
import bitgetwallet from "../../../public/bitgetwallet.svg";
import metamask from "../../../public/metamask.svg";
import torus from "../../../public/torus.svg";
import portis from "../../../public/portis.svg";
import WhatisWallet from "../components/whatiswallet";
const ConnectWallet = () => {
  const cryptos = [
    {
      title: "Coinbase Wallet",
      icon: coinbase,
      href: "https://www.coinbase.com/wallet",
    },
    { title: "Passkeys", icon: passkey, href: "https://my.passkeys.network" },
    {
      title: "WalletConnect",
      icon: walletconnect,
      href: "https://cloud.walletconnect.com/sign-up",
    },
    {
      title: "Install Bitget Wallet",
      icon: bitgetwallet,
      href: "https://web3.bitget.com/en",
    },
    { title: "Install MetaMask", icon: metamask, href: "https://metamask.io/" },
  ];
  const moreCryptos = [
    {
      title: "Torus",
      icon: torus,
      href: "https://app.tor.us/v1.10.14/wallet/topup",
    },
    { title: "Portis", icon: portis, href: "https://www.portis.io/" },
  ];
  const [more, setMore] = useState(false);
  const [moreTitle, setMoreTitle] = useState("Show more");

  const [showConnectWallet, setShowConnectWallet] = useState(false);

  const handleClick = () => {
    setShowConnectWallet(true);
  };

  const closeConnect = () => {
    setShowConnectWallet(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <Link href="/" className={styles.logo_wrap}>
          <Image src={logo} className={styles.logo} alt={name} />
          <span>{name}</span>
        </Link>
      </div>
      <div className={styles.content2}>
        <div className={styles.connect}>
          <h3>Connect Wallet</h3>
          <p>
            Choose your favourite wallet to log in {name}.<br />
            <span onClick={handleClick}>What is a wallet?</span>
          </p>
          <span className={styles.popular}>Popular</span>

          <div className={styles.cryptos}>
            {cryptos.map((crypto, index) => (
              <Link
                className={styles.crypto}
                key={index}
                href={crypto.href}
                target="_blank"
              >
                <Image
                  src={crypto.icon}
                  alt={crypto.title}
                  className={styles.img}
                />
                <span>{crypto.title}</span>
              </Link>
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
        </div>
      </div>
      {showConnectWallet && <WhatisWallet closeConnect={closeConnect} />}
    </div>
  );
};
export default ConnectWallet;
