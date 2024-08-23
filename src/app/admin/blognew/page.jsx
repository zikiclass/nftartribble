"use client";
import { useState } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { blogSchema } from "@/app/validationSchemas";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import { CldUploadWidget, CldImage } from "next-cloudinary";
import NavBar from "../components/navbar";
const BlogNew = () => {
  const [blogImg, setBlogImg] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(blogSchema) });
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
          <div className={styles.form}>
            <div className={styles.input}>
              <label>Blog Image</label>
              {blogImg && (
                <CldImage
                  src={blogImg}
                  width={250}
                  height={150}
                  alt="Blog Image"
                  style={{ marginBottom: "1rem" }}
                />
              )}
              <CldUploadWidget
                uploadPreset="czg2ltx7"
                options={{
                  sources: ["local"],
                  multiple: false,
                  maxFiles: 5,
                  styles: {
                    palette: {
                      window: "#FFFFFF",
                      windowBorder: "#90A0B3",
                      tabIcon: "#0078FF",
                      menuIcons: "#5A616A",
                      textDark: "#000000",
                      textLight: "#FFFFFF",
                      link: "#0078FF",
                      action: "#FF620C",
                      inactiveTabIcon: "#0E2F5A",
                      error: "#F44235",
                      inProgress: "#0078FF",
                      complete: "#20B832",
                      sourceBg: "#E4EBF1",
                    },
                    fonts: {
                      default: null,
                      "'Fira Sans', sans-serif": {
                        url: "https://fonts.googleapis.com/css?family=Fira+Sans",
                        active: true,
                      },
                    },
                  },
                }}
                onUpload={(result, widget) => {
                  if (result.event !== "success") return;
                  setBlogImg(result.info.public_id);
                }}
              >
                {({ open }) => (
                  <button className={styles.btnAdd} onClick={() => open()}>
                    Select Blog Image
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>
          <form
            action=""
            className={styles.form}
            onSubmit={handleSubmit(async (data) => {
              if (!blogImg) {
                Swal.fire({
                  title: "Error!",
                  text: "Please select Blog image",
                  icon: "error",
                });
              } else {
                try {
                  await axios.post("/api/blog", {
                    ...data,
                    blogImg,
                  });
                  Swal.fire({
                    title: "Success!",
                    text: "Blog added successfully",
                    icon: "success",
                  });

                  router.push("/admin/blogs");
                } catch (error) {
                  toast.error(error.message);
                }
              }
            })}
          >
            <Toaster position="bottom-left" />

            <div className={styles.input}>
              <label>Author</label>
              <input
                type="text"
                name="author"
                placeholder="Author"
                {...register("author")}
                className={styles.input_}
              />
              {errors.author && <p>{errors.author.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Blog Headline</label>
              <input
                type="text"
                name="heading"
                placeholder="Headline"
                {...register("heading")}
                className={styles.input_}
              />
              {errors.heading && <p>{errors.heading.message}</p>}
            </div>
            <div className={styles.input}>
              <label>First Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="First Paragraph"
                {...register("content1")}
              ></textarea>
              {errors.content1 && <p>{errors.content1.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Second Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Second Paragraph"
                {...register("content2")}
              ></textarea>
              {errors.content2 && <p>{errors.content2.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Third Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Third Paragraph"
                {...register("content3")}
              ></textarea>
              {errors.content3 && <p>{errors.content3.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Fourth Paragraph</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Fourth Paragraph"
                {...register("content4")}
              ></textarea>
              {errors.content4 && <p>{errors.content4.message}</p>}
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Add Blog
            </button>
          </form>
        </div>
      </Content>
    </div>
  );
};
export default BlogNew;
