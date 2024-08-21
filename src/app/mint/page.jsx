"use client";
import React, { Suspense } from "react";
import Navbar from "../components/navbar";
import QuickSignUp from "../components/quicksignup";
import Footer from "../components/footer";
import MintClient from "../components/mintclient";

export default function Mint() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <MintClient />
      </Suspense>
      <QuickSignUp />
      <Footer />
    </>
  );
}
