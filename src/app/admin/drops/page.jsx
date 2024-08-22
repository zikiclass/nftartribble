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
import { CldImage } from "next-cloudinary";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
const Drops = () => {
  const router = useRouter();
  const temp = [1, 2, 3, 4, 5, 6];
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getNFT = async () => {
    const response = await axios.get(`/api/nftdrop`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getNFT();
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [lists]);

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
        const deleteNFT = async () => {
          const response = await axios.delete("/api/nftdrop", {
            params: { id },
          });
          if (response.status === 200) {
            getNFT();
            Swal.fire({
              title: "Deleted!",
              text: "NFT record has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Unable to delete NFT",
              icon: "error",
            });
          }
        };
        deleteNFT();
      }
    });
  };
  const [menu, setMenu] = useState(true);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };

  const { data: session, status } = useSession();

  if (status === "unauthenticated") {
    router.push("/admin/signin");
  }
  return (
    <div className={styles.container}>
      <SideBar menu={menu} handleClose={openMenu} />
      <Content menu={menu}>
        <NavBar menu={menu} closeMenu={closeMenu} openMenu={openMenu} />

        <h3>NFTs</h3>
        <div className={styles.content}>
          <Link href="/admin/dropnew" className={styles.btnAdd}>
            + New NFT
          </Link>
          {!loading ? (
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Posted By</th>
                  <th>Amount</th>
                  <th>Author Image</th>
                  <th>NFT Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lists.map((list, index) => (
                  <tr key={index}>
                    <td>{list.title}</td>
                    <td>{list.postedby}</td>
                    <td>{list.amount}</td>
                    <td>
                      <CldImage
                        src={list.authorImg}
                        width={100}
                        height={100}
                        alt="Author Image"
                        style={{
                          borderRadius: "10px",
                          border: "3px solid #ccc",
                        }}
                      />
                    </td>
                    <td>
                      <CldImage
                        src={list.NFTImg}
                        width={100}
                        height={100}
                        alt="NFT Image"
                        style={{
                          borderRadius: "10px",
                          border: "3px solid #ccc",
                        }}
                      />
                    </td>
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
                  <th>Title</th>
                  <th>Posted By</th>
                  <th>Amount</th>
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
export default Drops;
