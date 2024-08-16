import styles from "./css/footer.module.css";
import { name } from "../../../../env";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className={styles.container}>
      <span>
        {currentYear} &copy; {name}
      </span>
      <span>
        Designed & Developed by <span>ZikiTech</span>
      </span>
    </div>
  );
};
export default Footer;
