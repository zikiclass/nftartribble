"use client";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import LatestDrops from "./components/latestdrops";
import TradingView from "./components/tradingviewchart";
import LoadNFT from "./components/loadNFT";
import Blog from "./components/blog";
import QuickSignUp from "./components/quicksignup";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestDrops />

      <TradingView />

      <Blog />
      <QuickSignUp />
    </>
  );
}

const Div = styled.div`
  padding: 2rem;
  margin: 1rem;
  width: auto;
  height: 100%;
  display: flex;
  gap: 1rem;
  border-radius: 15px;
  border: 1px solid rgb(27, 35, 110);
`;
