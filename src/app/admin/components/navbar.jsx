import styles from "./css/navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import user from "../../../../public/avatar-4.jpg";
import Image from "next/image";
const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <MenuIcon />
      </div>
      <div className={styles.quickNavbar}>
        <div className={styles.notify}>
          <NotificationsIcon />
          <span>0</span>
        </div>
        <div className={styles.user}>
          <Image src={user} alt="user" className={styles.user_img} />
          <span>Jamie D.</span>
          <KeyboardArrowDownIcon style={{ fontSize: "15px" }} />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
