"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/carousel.module.css";
import Image from "next/image";
import { name } from "../../../env";
import img5 from "../../../public/video-to-gif-converter.gif";
import axios from "axios";
import Link from "next/link";
import { CldImage } from "next-cloudinary";
const CarouselMint = ({ id }) => {
  const [nfts, setNfts] = useState([]);
  const [count, setCount] = useState(1);
  const addCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subtractCount = () => {
    if (count > 1) setCount((prevCount) => prevCount - 1);
    else setCount(1);
  };
  useEffect(() => {
    const getNFT = async () => {
      const response = await axios.get(`/api/nftdropunique?id=${id}`);

      if (response.data) setNfts(response.data);
    };
    getNFT();
  }, []);
  return (
    <div className={styles.container}>
      <div className={`${styles.slide4} ${styles.active}`}>
        <div className={styles.img}>
          <CldImage
            src={nfts.NFTImg}
            alt="NFT Img"
            width={100}
            height={100}
            className={styles.bgImg}
          />
        </div>
        <div className={styles.slide_content}>
          <span>
            <i></i>minting now
          </span>
          <h2>{nfts.title}</h2>
          <div className={styles.by}>
            <span>by</span>{" "}
            <div className={styles.rariblex}>
              {nfts.postedby}{" "}
              <svg
                display="block"
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                  fill="rgba(255, 255, 255, 1)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                  fill="rgb(25, 28, 31)"
                ></path>
              </svg>{" "}
            </div>
            <div className={styles.rariblex}>
              <span> on </span>{" "}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                xlmns="http://www.w3.org/2000/svg"
                class="sc-gEvEer tTyui sc-cWSHoV yozIb sc-cWSHoV yozIb"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 12C20 16.4183 16.412 20 11.986 20C7.78694 20 4.34212 16.776 4 12.6725H14.5926V11.3275H4C4.34212 7.22394 7.78694 4 11.986 4C16.412 4 20 7.58171 20 12Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span> Base </span>
            </div>
          </div>
          <p>{nfts.short_description}</p>
          <div className={styles.cta}>
            <div className={styles.number_}>
              <span className={styles.number_count_} onClick={subtractCount}>
                -
              </span>{" "}
              <span>{count}</span>
              <span className={styles.number_count_} onClick={addCount}>
                +
              </span>
            </div>
            <Link href="/" className={styles.connect}>
              Mint for {nfts.amount}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMint;
