"use client";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Blogs = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    router.push("/admin/signin");
  }
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
