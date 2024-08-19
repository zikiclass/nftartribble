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
const Admin = () => {
  const [lists, setList] = useState([]);
  const getAdmins = async () => {
    const response = await axios.get(`/api/register`);
    if (response.data) setList(response.data);
  };
  useEffect(() => {
    getAdmins();
  }, []);
  useEffect(() => {
    console.log(lists);
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
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Administrators</h3>
        <div className={styles.content}>
          <Link href="/admin/addnew" className={styles.btnAdd}>
            Add New
          </Link>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => (
                <tr key={index}>
                  <td>{list.id}</td>
                  <td>{list.email}</td>
                  <td>{formatDate(list.date)}</td>
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
        </div>
      </Content>
    </div>
  );
};
export default Admin;
