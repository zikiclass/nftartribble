import Navbar from "../components/navbar";
import Footer from "../components/footer";
import AllDrops from "../components/alldrops";
import QuickSignUp from "../components/quicksignup";
const Explore = () => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <AllDrops />
        <QuickSignUp />
        <Footer />
      </div>
    </>
  );
};
export default Explore;
