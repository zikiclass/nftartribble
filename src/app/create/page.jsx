"use client";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ChooseBlockchain from "../components/chooseblockchain";
const CreateNFT = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <ChooseBlockchain />
      <Footer />
    </>
  );
};

export default CreateNFT;
