"use client";
import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import CarouselMint from "../components/carouselmint";
import AboutMint from "../components/aboutmint";
import QuickSignUp from "../components/quicksignup";
import Footer from "../components/footer";
import axios from "axios";
import { useSearchParams } from "next/navigation";
export default function Mint() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    const getNFT = () => {};
  }, []);
  return (
    <>
      <Navbar />
      <CarouselMint id={id} />
      <AboutMint id={id} />
      <QuickSignUp />
      <Footer />
    </>
  );
}
