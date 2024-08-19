"use client";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import Link from "next/link";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { format, parseISO } from "date-fns";
import DeleteIcon from "@mui/icons-material/Delete";
const Admin = () => {
  const [lists, setList] = useState([]);
  useEffect(() => {
    const getAdmins = async () => {
      const response = await axios.get(`/api/register`);
      if (response.data) setList(response.data);
    };
    getAdmins();
  }, []);
  useEffect(() => {
    console.log(lists);
  }, [lists]);
  const formatDate = (dateString) => {
    const date = parseISO(dateString);
    return format(date, "EEEE dd, MMMM yyyy hh:mm:ss a");
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
                    <Link href="/" className={styles.btnDelete}>
                      <span>Delete</span>{" "}
                      <DeleteIcon style={{ fontSize: "13px" }} />
                    </Link>
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
