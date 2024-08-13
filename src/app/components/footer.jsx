import React from "react";
import styles from "./css/footer.module.css";
import { name } from "../../../env";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo_wrap}>
          <Image src={logo} className={styles.logo} alt={name} />
          <span>{name}</span>
        </Link>

        <div className={styles.content1}>
          <h2>Stay in the loop</h2>
          <form action="">
            <input type="email" placeholder="Your e-mail" name="email" />
            <input type="submit" value="Sign up" />
          </form>
        </div>
        <div className={styles.content1}>
          <h2>Marketplace</h2>
          <ul>
            <li>Explore</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <span>&copy; {name}, Inc.</span>
      </div>
    </div>
  );
};

export default Footer;
