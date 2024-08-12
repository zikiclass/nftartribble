"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./css/style.module.css";

const Trending = () => {
  const [nfts, setNFTs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const OPENSEA_API_BASE = "https://api.opensea.io/api/v2";
  const API_KEY = "6f235859a6d5441e9c9a114798a05003";

  useEffect(() => {
    const getCollectionNFTs = async () => {
      try {
        const response = await axios.get(
          `${OPENSEA_API_BASE}/collection/kanpai-pandas`,
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`,
            },
          }
        );
        setNFTs(response.data); // Adjust according to API response structure
        setLoading(false);
      } catch (error) {
        console.log("Error fetching collection", error);
        setError(error);
        setLoading(false);
      }
    };

    getCollectionNFTs();
  }, [API_KEY]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <h3>Trending</h3>
      <ul>
        {nfts.map((nft) => (
          <li key={nft.id}>{nft.name}</li> // Adjust according to API response structure
        ))}
      </ul>
    </div>
  );
};

export default Trending;
