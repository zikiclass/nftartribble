"use client";
import React, { useState } from "react";
import styles from "./css/chooseblockchain.module.css";
import eth from "../../../public/ethereum.svg";
import celo from "../../../public/celo.svg";
import moonbeam from "../../../public/moonbeam.svg";
import etherlink from "../../../public/etherlink.svg";
import lisk from "../../../public/lisk.svg";
import polygon from "../../../public/polygon.svg";
import base from "../../../public/base.svg";
import rari from "../../../public/rari.svg";
import astar from "../../../public/astar.svg";
import kroma from "../../../public/kroma.svg";
import zkSync from "../../../public/zkSync.svg";
import immutableX from "../../../public/immutableX.svg";
import ConnectWallet from "./connectwallet";
import Image from "next/image";
const ChooseBlockchain = () => {
  const chooseOptions = [
    { crypto: "Ethereum", icon: eth },
    { crypto: "Celo", icon: celo },
    { crypto: "Moonbeam", icon: moonbeam },
    { crypto: "Etherlink", icon: etherlink },
    { crypto: "Lisk", icon: lisk },
    { crypto: "Polygon", icon: polygon },
    { crypto: "Base", icon: base },
    { crypto: "RARI Chain", icon: rari },
    { crypto: "Astar zkEvm", icon: astar },
    { crypto: "Kroma", icon: kroma },
    { crypto: "zkSync", icon: zkSync },
    { crypto: "Immutable X", icon: immutableX },
  ];

  const [showConnectWallet, setShowConnectWallet] = useState(false);
  const [cryptoTitle, setCryptoTitle] = useState("");
  const handleClick = (crypto) => {
    setCryptoTitle(crypto);
    setShowConnectWallet(true);
  };

  const closeConnect = () => {
    setCryptoTitle(null);
    setShowConnectWallet(false);
  };
  return (
    <div className={styles.container}>
      <h2>Choose Blockchain</h2>
      <p>
        Choose the most suitable blockchain for your needs. You need to connect
        wallet for creation.
      </p>

      <div className={styles.lists}>
        {chooseOptions.map((option, index) => (
          <div
            className={styles.list}
            key={index}
            onClick={() => handleClick(option.crypto)}
          >
            <Image
              src={option.icon}
              alt={option.crypto}
              className={styles.img}
            />
            <span>{option.crypto}</span>
          </div>
        ))}
      </div>

      {showConnectWallet && (
        <ConnectWallet crypto={cryptoTitle} closeConnect={closeConnect} />
      )}
    </div>
  );
};
export default ChooseBlockchain;
