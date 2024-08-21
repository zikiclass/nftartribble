"use client";
import React, { useState, useEffect } from "react";
import styles from "./style.module.css";
import { name } from "../../../env";
import logo from "../../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import coinbase from "../../../public/btc-logo-6219386_1280.png";
import passkey from "../../../public/ethereum-logo-6278329_1280.png";
import walletconnect from "../../../public/Cryptocurrency-Tether-Usdt-Logo-Graphics-13393983-1.jpg";
import bitgetwallet from "../../../public/litecoin-ltc-logo.png";
import Swal from "sweetalert2";
import axios from "axios";
const MakePayment = () => {
  const cryptos = {
    BTC: coinbase,
    ETH: passkey,
    USDT: walletconnect,
    "Lite Coin": bitgetwallet,
  };
  const [lists, setList] = useState([]);
  const getWallet = async () => {
    const response = await axios.get(`/api/wallet`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getWallet();
  }, []);
  const handleCopy = async (text) => {
    await navigator.clipboard.writeText(text);
    Swal.fire({
      title: "Copied!",
      text: "Wallet address copied",
      icon: "success",
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <Link href="/" className={styles.logo_wrap}>
          <Image src={logo} className={styles.logo} alt={name} />
        </Link>
      </div>
      <div className={styles.content2}>
        <div className={styles.connect}>
          <h3>Make Payment</h3>
          <p>
            Proceed to copy any of the wallet suitable to you to make your
            payment.
          </p>

          <div className={styles.cryptos}>
            {lists.map((list, index) => (
              <>
                <span className={styles.popular}>{list.crypto}</span>
                <div className={styles.crypto} key={index}>
                  <div
                    className={styles.cryp}
                    onClick={() => handleCopy(list.wallet)}
                  >
                    <Image
                      src={cryptos[list.crypto] || ""}
                      alt={list.crypto}
                      className={styles.img}
                    />
                    <span>{list.wallet}</span>
                  </div>
                  <button onClick={() => handleCopy(list.wallet)}>Copy</button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MakePayment;
