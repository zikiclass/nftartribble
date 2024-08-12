import Navbar from "./components/navbar";
import Carousel from "./components/carousel";
import LatestDrops from "./components/latestdrops";
import Trending from "./components/trending";
export default function Home() {
  return (
    <>
      <Navbar />
      <Carousel />
      <LatestDrops />
      <Trending />
    </>
  );
}
