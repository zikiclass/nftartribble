import Navbar from "../components/navbar";
import Footer from "../components/footer";
import LatestDrops from "../components/latestdrops";
import TradingView from "../components/tradingviewchart";
import QuickSignUp from "../components/quicksignup";
const Explore = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <LatestDrops />
        <TradingView />
        <QuickSignUp />
        <Footer />
      </div>
    </>
  );
};
export default Explore;
