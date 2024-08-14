import Navbar from "../components/navbar";
import Footer from "../components/footer";
import TradingView from "../components/tradingviewchart";
import QuickSignUp from "../components/quicksignup";
import Blog from "../components/blog";
const Explore = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <Blog />
        <TradingView />
        <QuickSignUp />
        <Footer />
      </div>
    </>
  );
};
export default Explore;
