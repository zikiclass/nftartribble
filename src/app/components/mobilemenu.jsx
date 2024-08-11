import React, { useState } from "react";
import styles from "./css/menu.module.css";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
const MobileMenu = ({ closeMenu }) => {
  return (
    <div className={styles.mobile_container}>
      <CloseIcon
        style={{
          fontSize: "1.8rem",
          cursor: "pointer",
          float: "right",
        }}
        onClick={closeMenu}
      />
      <div className={styles.menu_}>
        <div className={styles.menu__}>
          <Link href="/" className={styles.menu_link_}>
            Create
          </Link>
          <Link href="/" className={styles.menu_link_}>
            Explore
          </Link>
          <Link href="/" className={styles.menu_link_}>
            Sell
          </Link>
          <Link href="/" className={styles.menu_link_}>
            <span>Drops</span> <span className={styles.new}>new</span>
          </Link>
        </div>
        <Link href="/" className={styles.conect}>
          Connect Wallet
        </Link>
      </div>
    </div>
  );
};
export default MobileMenu;
