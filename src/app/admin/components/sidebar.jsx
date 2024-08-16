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
const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoDiv}>
        <Image src={logo} alt="logo" className={styles.logo} />
        <span>{name}</span>
      </div>
      <div className={styles.menu}>
        <span className={styles.menu_}>menu</span>
        <Link href="/" className={styles.link}>
          <HouseSidingIcon />
          <span>Dashboard</span>
        </Link>
        <Link href="/" className={styles.link}>
          <ChangeCircleIcon />
          <span>Connected Wallets</span>
        </Link>
        <Link href="/" className={styles.link}>
          <CurrencyBitcoinIcon />
          <span>Drops</span>
        </Link>
        <Link href="/" className={styles.link}>
          <RssFeedIcon />
          <span>Blogs</span>
        </Link>
        <Link href="/" className={styles.link}>
          <WalletIcon />
          <span>Wallet Phrase</span>
        </Link>
        <Link href="/" className={styles.link}>
          <SupervisorAccountIcon />
          <span>Admin</span>
        </Link>
        <Link href="/" className={styles.link}>
          <AccountBalanceWalletIcon />
          <span>Wallet Address</span>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
