"use client";
import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import LatestDrops from "./components/latestdrops";
import TradingView from "./components/tradingviewchart";
import Blog from "./components/blog";
import QuickSignUp from "./components/quicksignup";
import Footer from "./components/footer";
import styled from "styled-components";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestDrops />
      <Div>
        <TradingView />
      </Div>
      <Blog />
      <QuickSignUp />
      <Footer />
    </>
  );
}

const Div = styled.div`
  padding: 2rem;
  margin: 1rem;
  width: auto;
  height: 100%;
  gap: 1rem;
  border-radius: 15px;
  border: 1px solid #2b2e31;
`;
