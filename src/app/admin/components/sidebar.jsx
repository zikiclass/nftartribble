"use client";
import React, { useState } from "react";
import styles from "./css/sidebar.module.css";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { name } from "../../../../env";
import Link from "next/link";
import HouseSidingIcon from "@mui/icons-material/HouseSiding";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import WalletIcon from "@mui/icons-material/Wallet";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import CloseIcon from "@mui/icons-material/Close";
const SideBar = ({ menu, handleClose }) => {
  return (
    <div
      className={`${styles.container} ${!menu && styles.cont}`}
      style={{ width: menu ? "250px" : "0px" }}
    >
      <CloseIcon className={styles.close} onClick={handleClose} />
      <div className={styles.logoDiv}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <span>{name}</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menu_}>menu</span>
        <Link href="/admin/dashboard" className={styles.link}>
          <HouseSidingIcon />
          <span>Dashboard</span>
        </Link>
        {/* <Link href="/admin/connectedwallets" className={styles.link}>
          <ChangeCircleIcon />
          <span>Connected Wallets</span>
        </Link> */}
        <Link href="/admin/drops" className={styles.link}>
          <CurrencyBitcoinIcon />
          <span>NFTs</span>
        </Link>
        <Link href="/admin/blogs" className={styles.link}>
          <RssFeedIcon />
          <span>Blogs</span>
        </Link>
        {/* <Link href="/admin/walletphrase" className={styles.link}>
          <WalletIcon />
          <span>Wallet Phrase</span>
        </Link> */}
        <Link href="/admin/admin_" className={styles.link}>
          <SupervisorAccountIcon />
          <span>Admin</span>
        </Link>
        <Link href="/admin/walletaddress" className={styles.link}>
          <AccountBalanceWalletIcon />
          <span>Wallet Address</span>
        </Link>
        <Link href="/api/auth/signout" className={styles.link}>
          <LogoutIcon />
          <span>Sign Out</span>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
