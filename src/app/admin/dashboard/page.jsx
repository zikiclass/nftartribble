"use client";
import React, { useEffect, useState } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "./dashboard.module.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import wallet from "../../../../public/istockphoto-1084096262-612x612.jpg";
import drop from "../../../../public/2IximP-9AT7sSrfD8R8MYhJZn-O108_lMqP4iOS0hsM.gif";
import blog from "../../../../public/XaBEs80WdnRF4HDwgC9SHdjOolbZiYncIPxe49uu5Hg.png";
import walletphrase from "../../../../public/0_lzwWHNY2ZALys-f8.png";
import admin from "../../../../public/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg";
import Card from "../components/card";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const cardLists = [
    {
      img: wallet,
      title: "WALLET ADDRESS",
      content: "Hello! click the button below to view/add wallet address",
      href: "/admin/walletaddress",
    },
    {
      img: drop,
      title: "NFT",
      content: "Hello! click the button below to view/add new NFT",
      href: "/admin/drops",
    },
    {
      img: blog,
      title: "BLOGS",
      content: "Hello! click the button below to view/add new blogs",
      href: "/admin/blogs",
    },
    {
      img: walletphrase,
      title: "WALLET PHRASE",
      content: "Hello! click the button below to view wallet phrase",
      href: "/admin/walletphrase",
    },
    {
      img: admin,
      title: "ADMIN",
      content: "View administrators",
      href: "/admin/admin_",
    },
  ];
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
        <h3>Dashboard</h3>
        <div className={styles.dash}>
          <div className={styles.analysis}>
            <div className={styles.box}>
              <div className={styles.box_head}>
                <h4>Connected Users</h4>
                <span>All</span>
              </div>

              <div className={styles.box_content}>
                <h4>19</h4>
                <span>
                  12.5% <ArrowUpwardIcon className={styles.percent} />
                </span>
              </div>

              <div className={styles.box_footer}>
                <div className={styles.box_footer_content}></div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box_head}>
                <h4>NFT</h4>
                <span>All</span>
              </div>

              <div className={styles.box_content}>
                <h4>19</h4>
                <span>
                  12.5% <ArrowUpwardIcon className={styles.percent} />
                </span>
              </div>

              <div className={styles.box_footer}>
                <div className={styles.box_footer_content}></div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box_head}>
                <h4>Blogs</h4>
                <span>All</span>
              </div>

              <div className={styles.box_content}>
                <h4>19</h4>
                <span>
                  12.5% <ArrowUpwardIcon className={styles.percent} />
                </span>
              </div>

              <div className={styles.box_footer}>
                <div className={styles.box_footer_content}></div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.box_head}>
                <h4>Admin</h4>
                <span>All</span>
              </div>

              <div className={styles.box_content}>
                <h4>19</h4>
                <span>
                  12.5% <ArrowUpwardIcon className={styles.percent} />
                </span>
              </div>

              <div className={styles.box_footer}>
                <div className={styles.box_footer_content}></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {cardLists.map((card, index) => (
            <Card
              img={card.img}
              title={card.title}
              content={card.content}
              link={card.href}
            />
          ))}
        </div>
      </Content>
    </div>
  );
};
export default Dashboard;
