"use client";
import React, { useEffect, useState } from "react";
import styles from "./css/aboutmint.module.css";
import { CldImage } from "next-cloudinary";
import axios from "axios";
const AboutMint = ({ text, author, id }) => {
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    const getNFT = async () => {
      const response = await axios.get(`/api/nftdropunique?id=${id}`);

      if (response.data) setNfts(response.data);
    };
    getNFT();
  }, []);

  return (
    <div className={styles.container}>
      <h4 className={styles.about}>About</h4>
      <div className={styles.content}>
        <p>
          {nfts.about_author}
          <button>Follow on X</button>
        </p>
        <CldImage
          src={nfts.authorImg}
          width={100}
          height={100}
          className={styles.contentImg}
        />
      </div>
    </div>
  );
};
export default AboutMint;
