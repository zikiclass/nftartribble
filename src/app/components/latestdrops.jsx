"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/style.module.css";
import Link from "next/link";
import Drop from "./drop";
import axios from "axios";
import EastIcon from "@mui/icons-material/East";

const LatestDrops = () => {
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    const getDrops = async () => {
      const response = await axios.get("/api/nftdrop10");
      if (response.status === 200) setDrops(response.data);
    };
    getDrops();
  }, []);

  useEffect(() => {
    console.log(drops);
  }, [drops]);

  return (
    <div className={styles.container}>
      <h3>Latest drops</h3>
      <div className={styles.drops}>
        {drops.map((drop) => (
          <div key={drop.id}>
            <Drop
              small={drop.postedby}
              name={drop.title}
              minting={drop.period}
              price={drop.amount}
              bg={drop.NFTImg}
              status={drop.status}
            />
          </div>
        ))}
      </div>
      <Link href="/drops" className={styles.view}>
        View all drops <EastIcon />
      </Link>
    </div>
  );
};

export default LatestDrops;
