"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/style.module.css";

import Drop from "./drop";
import axios from "axios";

const AllDrops = () => {
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    const getDrops = async () => {
      const response = await axios.get("/api/nftdrop");
      if (response.status === 200) setDrops(response.data);
    };
    getDrops();
  }, []);

  useEffect(() => {
    console.log(drops);
  }, [drops]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      <h3>Drops</h3>
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
    </div>
  );
};

export default AllDrops;
