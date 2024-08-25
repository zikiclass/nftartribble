"use client";
import { useState, useEffect } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import Link from "next/link";

import toast, { Toaster } from "react-hot-toast";
import { useSearchParams, useRouter } from "next/navigation";

import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import NavBar from "../components/navbar";
const BlogEdit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [author, setAuthor] = useState("");
  const [headline, setHeadline] = useState("");
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get(`/api/blogsearch?id=${id}`);
      if (response) {
        setAuthor(response.data.author);
        setHeadline(response.data.heading);
        setContent1(response.data.content1);
        setContent2(response.data.content2);
        setContent3(response.data.content3);
        setContent4(response.data.content4);
      }
    };
    getBlogs();
  }, []);

  const { data: session, status } = useSession();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("/api/blogsearch", {
        author,
        headline,
        content1,
        content2,
        content3,
        content4,
        id,
      });
      Swal.fire({
        title: "Success!",
        text: "Blog updated successfully",
        icon: "success",
      });

      router.push("/admin/blogs");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className={styles.container}>
      <SideBar menu={menu} handleClose={openMenu} />
      <Content menu={menu}>
        <NavBar menu={menu} closeMenu={closeMenu} openMenu={openMenu} />

        <h3>New Blog</h3>
        <div className={styles.content}>
          <Link href="/admin/blogs" className={styles.btnBack}>
            <UndoIcon />
            Back
          </Link>

          <form action="" className={styles.form} onSubmit={handleSubmit}>
            <Toaster position="bottom-left" />

            <div className={styles.input}>
              <label>Author</label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={styles.input_}
              />
            </div>
            <div className={styles.input}>
              <label>Blog Headline</label>
              <input
                type="text"
                name="heading"
                placeholder="Headline"
                value={headline}
                onChange={(e) => setHeadline(e.target.value)}
                className={styles.input_}
              />
            </div>
            <div className={styles.input}>
              <label>First Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="First Paragraph"
                value={content1}
                onChange={(e) => setContent1(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label>Second Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Second Paragraph"
                value={content2}
                onChange={(e) => setContent2(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label>Third Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Third Paragraph"
                value={content3}
                onChange={(e) => setContent3(e.target.value)}
              ></textarea>
            </div>
            <div className={styles.input}>
              <label>Fourth Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Fourth Paragraph"
                value={content4}
                onChange={(e) => setContent4(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Update Blog
            </button>
          </form>
        </div>
      </Content>
    </div>
  );
};
export default BlogEdit;
