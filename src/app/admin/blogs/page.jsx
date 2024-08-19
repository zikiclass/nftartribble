import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";

const Blogs = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Blogs</h3>
      </Content>
    </div>
  );
};
export default Blogs;
