import NavBar from "./navbar";
import Footer from "./footer";
import styles from "./css/content.module.css";
const Content = ({ children, menu }) => {
  return (
    <div
      className={styles.container}
      style={{ marginLeft: menu ? "245px" : "0px" }}
    >
      {children}
      <Footer />
    </div>
  );
};
export default Content;
