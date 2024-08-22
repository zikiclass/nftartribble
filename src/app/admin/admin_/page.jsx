"use client";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import NavBar from "../components/navbar";
const Admin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const temp = [1, 2, 3, 4, 5, 6];
  const [lists, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getAdmins = async () => {
    const response = await axios.get(`/api/register`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getAdmins();
    setLoading(false);
  }, []);
  useEffect(() => {
    setLoading(false);
  }, [lists]);
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEEE dd, MMMM yyyy hh:mm:ss a");
  };
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
          const response = await axios.delete("/api/register", {
            params: { id },
          });
          if (response.status === 200) {
            getAdmins();
            Swal.fire({
              title: "Deleted!",
              text: "Admin record has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Unable to delete record",
              icon: "error",
            });
          }
        };
        deleteAdmin();
      }
    });
  };
  if (status === "unauthenticated") {
    router.push("/admin/signin");
  }
  const [menu, setMenu] = useState(true);
  const closeMenu = () => {
    setMenu(false);
  };
  const openMenu = () => {
    setMenu(true);
  };
  return (
    <div className={styles.container}>
      <SideBar menu={menu} handleClose={openMenu} />
      <Content menu={menu}>
        <NavBar menu={menu} closeMenu={closeMenu} openMenu={openMenu} />

        <h3>Administrators</h3>
        <div className={styles.content}>
          <Link href="/admin/addnew" className={styles.btnAdd}>
            Add New
          </Link>
          {!loading ? (
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th className={styles.date}>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {lists.map((list, index) => (
                  <tr key={index}>
                    <td>{list.id}</td>
                    <td>{list.email}</td>
                    <td className={styles.date}>{formatDate(list.date)}</td>
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
                  <th>#</th>
                  <th>Email</th>
                  <th className={styles.date}>Date</th>
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
                    <td className={styles.date}>
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
export default Admin;
