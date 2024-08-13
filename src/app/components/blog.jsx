import React from "react";
import styles from "./css/blog.module.css";
import { name } from "../../../env";
import Image from "next/image";
import img2 from "../../../public/MG6AhoaVCu_r_E8k6JZehZo4XbbHixXKhi1zA6tb3zo.png";
import img1 from "../../../public/-POWTHe8AbDkerJ8WbNC5JwWgROGcJt4nO2THVv4t6s.png";
import img3 from "../../../public/UROynmrhXMeD3tkUEkZVLuZEse7Iqq8yKzvRmR3Dk70.png";
import img4 from "../../../public/XaBEs80WdnRF4HDwgC9SHdjOolbZiYncIPxe49uu5Hg.png";
import img5 from "../../../public/kwJhuhTd5SoDHuyTkqViAYxCMLCCutmyi53RcI7ltH0.jpg";
const Blog = () => {
  return (
    <div className={styles.container}>
      <h3>
        {name} <span>Blog</span>
      </h3>
      <div className={styles.content}>
        <div className={styles.main_content}>
          <Image src={img1} alt="Blog" className={styles.content1_img} />
          <span>spotlight</span>
          <h2>
            Andre Oshea Unveils New Generative Ordinals Drop on Gamma x Rarible
          </h2>
          <p>
            Rarible is partnering with Gamma to bring you “Nexus Grid”: Andre
            Oshea’s first Ordinals collection.
          </p>
        </div>
        <div className={styles.content1}>
          <div className={styles.content1_}>
            <div>
              <span>spotlight</span>
              <h2>Minting NFTs with DEGEN: All About the Drops</h2>
            </div>
            <Image src={img2} alt="Blog" className={styles.content1_img_} />
          </div>
          <div className={styles.content1_}>
            <div>
              <span>insights</span>
              <h2>
                Your Ultimate Guide to Getting Started With NFTs on Rarible
              </h2>
            </div>
            <Image src={img3} alt="Blog" className={styles.content1_img_} />
          </div>
          <div className={styles.content1_}>
            <div>
              <span>insights</span>
              <h2>5 NFT Projects Trending on Base</h2>
            </div>
            <Image src={img4} alt="Blog" className={styles.content1_img_} />
          </div>
          <div className={styles.content1_}>
            <div>
              <span>powwered by rarible</span>
              <h2>Cryptoys Collectibles Now on The Digital Toy Exchange ...</h2>
            </div>
            <Image src={img5} alt="Blog" className={styles.content1_img_} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
