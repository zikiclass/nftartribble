import NavBar from "./navbar";
import Footer from "./footer";
import styles from "./css/content.module.css";
const Content = ({ children }) => {
  return (
    <div className={styles.container}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};
export default Content;
