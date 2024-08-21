// components/MintClient.jsx
"use client"; // Ensure this is a client component

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarouselMint from "./carouselmint";
import AboutMint from "./aboutmint";

const MintClient = () => {
  const searchParams = useSearchParams();
  const [id, setId] = useState(null);

  useEffect(() => {
    const nftId = searchParams.get("id");
    setId(nftId);
  }, [searchParams]);

  if (id === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <CarouselMint id={id} />
      <AboutMint id={id} />
    </>
  );
};

export default MintClient;
