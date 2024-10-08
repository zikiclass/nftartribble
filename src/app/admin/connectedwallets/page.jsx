"use client";
import React, { useState } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import NavBar from "../components/navbar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const ConnectedWallets = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    router.push("/admin/signin");
  }
  const [menu, setMenu] = useState(true);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };
  return (
    <div className={styles.container}>
      <SideBar menu={menu} handleClose={openMenu} />
      <Content menu={menu}>
        <NavBar menu={menu} closeMenu={closeMenu} openMenu={openMenu} />

        <h3>Connected Wallets</h3>
      </Content>
    </div>
  );
};
export default ConnectedWallets;
