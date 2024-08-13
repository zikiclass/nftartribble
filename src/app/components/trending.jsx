"use client";
import React, { useState, useEffect } from "react";

const Trending = ({ nftData }) => {
  const [nfts, setNfts] = useState([]);

  useEffect(() => {
    if (nftData && nftData.result) {
      setNfts(nftData.result);
    } else {
      console.error("Invalid NFT data:", nftData);
    }
  }, [nftData]);

  return (
    <div style={{ flex: 2 }}>
      {nfts.length > 0 ? (
        nfts.map((nft, index) => {
          try {
            const nftMetaData = JSON.parse(nft.metadata);
            return <div key={index}>{nftMetaData.name}</div>; // Example display
          } catch (error) {
            console.error("Error parsing NFT metadata:", error);
            return <div key={index}>Error parsing metadata</div>;
          }
        })
      ) : (
        <div>No NFTs available</div>
      )}
    </div>
  );
};

export default Trending;
