"use client";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const WalletAddress = () => {
  const temp = [1, 2, 3, 4, 5, 6];
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getWallet = async () => {
    const response = await axios.get(`/api/wallet`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getWallet();
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [lists]);

  const cryptoList = [
    { crypto: "BTC" },
    { crypto: "ETH" },
    { crypto: "USDT" },
    { crypto: "Lite Coin" },
  ];

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteAdmin = async () => {
          const response = await axios.delete("/api/wallet", {
            params: { id },
          });
          if (response.status === 200) {
            getWallet();
            Swal.fire({
              title: "Deleted!",
              text: "Wallet address has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Unable to delete wallet address",
              icon: "error",
            });
          }
        };
        deleteAdmin();
      }
    });
  };

  const filteredCryptoList = cryptoList.filter(
    (crypList) => !lists.some((list) => list.crypto === crypList.crypto)
  );
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Wallet Address</h3>
        <div className={styles.content}>
          {filteredCryptoList.length !== 0 && (
            <Link href="/admin/walletnew" className={styles.btnAdd}>
              + Wallet
            </Link>
          )}

          {!loading ? (
            <table>
              <thead>
                <tr>
                  <th>Crypto</th>
                  <th>Wallet</th>

                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lists.map((list, index) => (
                  <tr key={index}>
                    <td>{list.crypto}</td>
                    <td>{list.wallet}</td>

                    <td>
                      <button
                        onClick={() => handleDelete(list.id)}
                        className={styles.btnDelete}
                      >
                        <span>Delete</span>{" "}
                        <DeleteIcon style={{ fontSize: "13px" }} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Crypto</th>
                  <th>Wallet</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {temp.map((tem, index) => (
                  <tr key={index}>
                    <td>
                      <Skeleton />
                    </td>
                    <td>
                      <Skeleton />
                    </td>
                    <td>
                      <Skeleton />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </Content>
    </div>
  );
};
export default WalletAddress;
