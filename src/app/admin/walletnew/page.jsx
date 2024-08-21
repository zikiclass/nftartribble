"use client";
import { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios";
import Swal from "sweetalert2";
const WalletNew = () => {
  const router = useRouter();
  const [crypto, setCrypto] = useState("");
  const [wallet, setWallet] = useState("");
  const cryptoList = [
    { crypto: "BTC" },
    { crypto: "ETH" },
    { crypto: "USDT" },
    { crypto: "Lite Coin" },
  ];
  const [lists, setList] = useState([]);
  const getWallet = async () => {
    const response = await axios.get(`/api/wallet`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getWallet();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/wallet", { crypto, wallet });
      Swal.fire({
        title: "Success!",
        text: "Wallet address added",
        icon: "success",
      });

      router.push("/admin/walletaddress");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const filteredCryptoList = cryptoList.filter(
    (crypList) => !lists.some((list) => list.crypto === crypList.crypto)
  );

  useEffect(() => {
    const defaultCrypto = filteredCryptoList[0]?.crypto || "";
    setCrypto(defaultCrypto);
  }, [lists]);
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>New Wallet Address</h3>
        <div className={styles.content}>
          <Link href="/admin/walletaddress" className={styles.btnBack}>
            <UndoIcon />
            Back
          </Link>

          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <Toaster position="bottom-left" />
            <div className={styles.input}>
              <label>Crypto</label>
              <select
                className={styles.input_}
                name="crypto"
                onChange={(e) => setCrypto(e.target.value)}
              >
                {filteredCryptoList.map((crypList) => (
                  <option key={crypList.crypto} value={crypList.crypto}>
                    {crypList.crypto}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.input}>
              <label>Wallet</label>
              <input
                type="text"
                name="wallet"
                placeholder="Wallet Address"
                required
                className={styles.input_}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Add Wallet
            </button>
          </form>
        </div>
      </Content>
    </div>
  );
};
export default WalletNew;
