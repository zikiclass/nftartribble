import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";

const ConnectedWallets = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Connected Wallets</h3>
      </Content>
    </div>
  );
};
export default ConnectedWallets;
