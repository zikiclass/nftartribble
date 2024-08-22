"use client";
import React, { useState } from "react";
import styles from "./css/navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import user from "../../../../public/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
const NavBar = ({ menu, closeMenu, openMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        {menu ? (
          <MenuIcon onClick={closeMenu} />
        ) : (
          <CloseIcon onClick={openMenu} />
        )}
      </div>
      <div className={styles.quickNavbar}>
        {/* <div className={styles.notify}>
          <NotificationsIcon />
          <span>0</span>
        </div> */}
        <div className={styles.user}>
          <Image src={user} alt="user" className={styles.user_img} />
          <span>@admin</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
