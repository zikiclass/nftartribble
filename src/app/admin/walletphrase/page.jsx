import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";

const WalletPhrase = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Wallet Phrase</h3>
      </Content>
    </div>
  );
};
export default WalletPhrase;
