"use client";
import React, { useState } from "react";
import styles from "./css/style.module.css";
import Link from "next/link";
import Drop from "./drop";
import EastIcon from "@mui/icons-material/East";
import bg6 from "../../../public/bvQn_8CHBu9xP8t2TsinMrFOssjhF_ietQg8WDHBVoQ.png";
import bg5 from "../../../public/OWMxmkGbWACbVUMzc8WonlnlJDqV2uJraiAHIqmnwds.gif";
import bg4 from "../../../public/AcpfdUlFBk6KFSlK3_CFuo5LOChHolgLQpYu6gdLPC4.gif";
import bg3 from "../../../public/AUfZeqCkzFBVKu2Sw__Cpndsi3-NQzT7giV2C2TNqXE.png";
import bg2 from "../../../public/video-to-gif-converter.gif";
import bg1 from "../../../public/2IximP-9AT7sSrfD8R8MYhJZn-O108_lMqP4iOS0hsM.gif";
const AllDrops = () => {
  const dropLists = [
    {
      id: 1,
      small: "RaribleX",
      name: "Rarible x Degen",
      minting: "Now",
      price: "100 $DEGEN",
      bg: bg1,
      status: "mint",
    },
    {
      id: 2,
      small: "Matt Monday",
      name: "Project Phäros",
      minting: "Now",
      price: "0.025 ETH",
      bg: bg2,
      status: "mint",
    },
    {
      id: 3,
      small: "Reza Milani",
      name: "Les lettres que tu n'as jamai...",
      minting: "Now",
      price: "600 $DEGEN",
      bg: bg3,
      status: "mint",
    },
    {
      id: 4,
      small: "Forexus",
      name: "DEGENerator Energy Drink",
      minting: "Completed",
      price: "100 $DEGEN",
      bg: bg4,
      status: "comp",
    },
    {
      id: 5,
      small: "Michael B. Stuart",
      name: "DEGEN Family",
      minting: "Completed",
      price: "420 $DEGEN",
      bg: bg5,
      status: "comp",
    },
    {
      id: 6,
      small: "Tù.úk'z",
      name: "At The Sight Of Beauty",
      minting: "1 day",
      price: "0.0075 ETH",
      bg: bg6,
      status: "start",
    },
  ];
  return (
    <div className={styles.container}>
      <h3>Drops</h3>
      <div className={styles.drops}>
        {dropLists.map((drop) => (
          <div key={drop.id}>
            <Drop
              small={drop.small}
              name={drop.name}
              minting={drop.minting}
              price={drop.price}
              bg={drop.bg.src}
              status={drop.status}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllDrops;
