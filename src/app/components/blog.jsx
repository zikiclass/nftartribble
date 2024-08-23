"use client";
import React, { useState, useEffect } from "react";
import styles from "./css/blog.module.css";
import { name } from "../../../env";
import Image from "next/image";
import { CldImage } from "next-cloudinary";
import axios from "axios";
import img2 from "../../../public/MG6AhoaVCu_r_E8k6JZehZo4XbbHixXKhi1zA6tb3zo.png";
import img1 from "../../../public/-POWTHe8AbDkerJ8WbNC5JwWgROGcJt4nO2THVv4t6s.png";
import img3 from "../../../public/UROynmrhXMeD3tkUEkZVLuZEse7Iqq8yKzvRmR3Dk70.png";
import img4 from "../../../public/XaBEs80WdnRF4HDwgC9SHdjOolbZiYncIPxe49uu5Hg.png";
import img5 from "../../../public/kwJhuhTd5SoDHuyTkqViAYxCMLCCutmyi53RcI7ltH0.jpg";
const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const getUniqueBlog = async () => {
      const response = await axios.get("/api/blogunique");
      if (response.status === 200) setBlog(response.data);
    };
    getUniqueBlog();
  }, []);
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const response = await axios.get("/api/blogall");
      if (response.status === 200) setBlogs(response.data);
    };
    getBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <h3>
        {name} <span>Blog</span>
      </h3>
      <div className={styles.content}>
        {blog.map((blg, index) => (
          <div className={styles.main_content} key={index}>
            <CldImage
              src={blg.blogImg}
              alt="Blog"
              width={100}
              height={100}
              className={styles.content1_img}
            />

            <span>{blg.author}</span>
            <h2>{blg.heading}</h2>
            <p>{blg.content1}</p>
          </div>
        ))}

        <div className={styles.content1}>
          {blogs.map((blog, index) => (
            <div className={styles.content1_} key={index}>
              <div>
                <span>{blog.author}</span>
                <h2>{blog.heading}</h2>
              </div>
              <CldImage
                src={blog.blogImg}
                alt="Blog"
                width={100}
                height={100}
                className={styles.content1_img_}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
