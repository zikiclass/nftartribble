"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/carousel.module.css";
import bg1 from "../../../public/2IximP-9AT7sSrfD8R8MYhJZn-O108_lMqP4iOS0hsM.gif";
import Image from "next/image";
import { name } from "../../../env";
import img5 from "../../../public/video-to-gif-converter.gif";
import img1 from "../../../public/bafkreiadi6oo72uouhjmwho37lbgoa4ogmq5ejwqe3cu4owm25v2ivlija.webp";
import img2 from "../../../public/e0t4sE9wcq7uKstQ3JdR4fU-CJWS4qR5xkdLWiY4LSY.jpg";
import img3 from "../../../public/X5S8jGriX2OE5dbCEc3J-kSwR3TUaMk1DOsoCsSNZqs.jpg";
import img4 from "../../../public/wv5h-JE8MDdxS4YvuitUmJVvsRgoldsY8lhXLTM7uz0.png";

import Link from "next/link";
const Carousel = () => {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const updateActiveSlide = () => {
      setActive((prevActive) => {
        if (prevActive < 5) {
          return prevActive + 1;
        } else {
          return 1;
        }
      });
    };
    const intervalId = setInterval(updateActiveSlide, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      {active === 1 ? (
        <div className={`${styles.slide1} ${styles.active}`}>
          <div className={styles.img}>
            <Image src={bg1} alt="bg1" className={styles.bgImg} />
          </div>
          <div className={styles.slide_content}>
            <span>
              <i></i>minting now
            </span>
            <h2>{name} x Degen</h2>
            <div className={styles.by}>
              <span>by</span>{" "}
              <div className={styles.rariblex}>
                <Image src={img1} className={styles.img_} /> RaridbleX{" "}
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
            <p>
              What a ride, DEGEN frens! We're thrilled to close this
              unbelievable drop series with the DEGEN team on Rarible.com,
              celebrating web3 culture at its core. This unique artwork was
              created by the Rarible team's in-house artist @rusky_pasha,...{" "}
              <Link href="/">Show More</Link>
            </p>
            <div className={styles.cta}>
              <div className={styles.number}>
                <span className={styles.number_count}>-</span> <span>1</span>
                <span className={styles.number_count}>+</span>
              </div>
              <Link href="/" className={styles.connect}>
                Mint for 100 $DEGEN
              </Link>
            </div>
            <div className={styles.minted}>
              <span>113 minted</span>
              <span className={styles.dot}></span>
              <span>20 per wallet</span>
              <span className={styles.dot}></span>
              <span>3d 0h left</span>
            </div>
          </div>
        </div>
      ) : active === 2 ? (
        <div className={`${styles.slide2} ${styles.active}`}>
          <div className={styles.img}>
            <Image src={img2} alt="bg2" className={styles.bgImg} />
          </div>
          <div className={styles.slide_content}>
            <h2>Some Laps on Celo</h2>

            <p>
              “Some Laps” is a collection featuring two NFTs of artist Jared
              Madere and Pauly Stone Jiva’s creation: “Laps”. How would you
              define a Lap?
            </p>
            <div className={styles.cta}>
              <Link href="/" className={styles.connect}>
                Mint Now
              </Link>
              <Link href="/" className={styles.connect_}>
                Celosphere
              </Link>
            </div>
          </div>
        </div>
      ) : active === 3 ? (
        <div className={`${styles.slide3} ${styles.active}`}>
          <div className={styles.img}>
            <Image src={img3} alt="bg2" className={styles.bgImg} />
          </div>
          <div className={styles.slide_content}>
            <h2>The Digital Toy Exchange</h2>

            <p>
              OnChainStudios is an innovative digital toy company that combines
              toys, gaming, and collectibles to create a playable universe. With
              a vision to reimagine the future of play, Cryptoys has joined
              forces with the world’s largest brands to...
              <Link href="/">Show More</Link>
            </p>
            <div className={styles.cta}>
              <Link href="/" className={styles.connect}>
                Explore Now
              </Link>
              <Link href="/" className={styles.connect_}>
                Powered by {name}X
              </Link>
            </div>
          </div>
        </div>
      ) : active === 4 ? (
        <div className={`${styles.slide4} ${styles.active}`}>
          <div className={styles.img}>
            <Image src={img5} alt="bg5" className={styles.bgImg} />
          </div>
          <div className={styles.slide_content}>
            <span>
              <i></i>minting now
            </span>
            <h2>Project Phäros</h2>
            <div className={styles.by}>
              <span>by</span>{" "}
              <div className={styles.rariblex}>
                Matt Monday{" "}
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
            <p>
              Founded by Matt Monday, Project Phäros is a collection of 10K
              PFP-style NFTs that place a high focus on culture and lore as a
              means to create a series of products and experiences for not only
              the holders, but the participants in the...{" "}
              <Link href="/">Show More</Link>
            </p>
            <div className={styles.cta}>
              <div className={styles.number_}>
                <span className={styles.number_count_}>-</span> <span>1</span>
                <span className={styles.number_count_}>+</span>
              </div>
              <Link href="/" className={styles.connect}>
                Mint for 0.025 ETH
              </Link>
            </div>
            <div className={styles.minted}>
              <span>287 minted</span>
              <span className={styles.dot}></span>
              <span>10 per wallet</span>
              <span className={styles.dot}></span>
              <span>20d 15h left</span>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${styles.slide5} ${styles.active}`}>
          <div className={styles.img}>
            <Image src={img4} alt="bg2" className={styles.bgImg} />
          </div>
          <div className={styles.slide_content}>
            <h2>Nexus Grids</h2>

            <p>
              Rarible enters the Ordinals ecosystem, in collaboration with OG
              digital artist Andre Oshea. 'Nexus Grids’ is a generative artwork
              exploring the intricacies of the human mind and the creative
              process. Colors and words intermingle in a hazy...
              <Link href="/">Show More</Link>
            </p>
            <div className={styles.cta}>
              <Link href="/" className={styles.connect}>
                Mint Now
              </Link>
              <Link href="/" className={styles.connect_}>
                Read more
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carousel;
