"use client";
import { useState } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { nftSchema } from "@/app/validationSchemas";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Swal from "sweetalert2";
import { CldUploadWidget, CldImage } from "next-cloudinary";
const DropNew = () => {
  const [authorImg, setAuthorImg] = useState("");
  const [nftImg, setNFTimg] = useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(nftSchema) });
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>New NFT</h3>
        <div className={styles.content}>
          <Link href="/admin/drops" className={styles.btnBack}>
            <UndoIcon />
            Back
          </Link>
          <div className={styles.form}>
            <div className={styles.input}>
              <label>Author Image</label>
              {authorImg && (
                <CldImage
                  src={authorImg}
                  width={250}
                  height={150}
                  alt="NFT Image"
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
                  setAuthorImg(result.info.public_id);
                }}
              >
                {({ open }) => (
                  <button className={styles.btnAdd} onClick={() => open()}>
                    Select Author Image
                  </button>
                )}
              </CldUploadWidget>
            </div>

            <div className={styles.input}>
              <label>NFT Image</label>
              {nftImg && (
                <CldImage
                  src={nftImg}
                  width={250}
                  height={150}
                  alt="NFT Image"
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
                  setNFTimg(result.info.public_id);
                }}
              >
                {({ open }) => (
                  <button className={styles.btnAdd} onClick={() => open()}>
                    Select NFT Image
                  </button>
                )}
              </CldUploadWidget>
            </div>
          </div>
          <form
            action=""
            className={styles.form}
            onSubmit={handleSubmit(async (data) => {
              if (!authorImg) {
                Swal.fire({
                  title: "Error!",
                  text: "Please select Author image",
                  icon: "error",
                });
              } else if (!nftImg) {
                Swal.fire({
                  title: "Error!",
                  text: "Please select NFT image",
                  icon: "error",
                });
              } else {
                try {
                  await axios.post("/api/nftdrop", {
                    ...data,
                    authorImg,
                    nftImg,
                  });
                  Swal.fire({
                    title: "Success!",
                    text: "NFT added successfully",
                    icon: "success",
                  });

                  router.push("/admin/drops");
                } catch (error) {
                  toast.error(error.message);
                }
              }
            })}
          >
            <Toaster position="bottom-left" />

            <div className={styles.input}>
              <label>NFT Title</label>
              <input
                type="text"
                name="title"
                placeholder="NFT Title"
                {...register("title")}
                className={styles.input_}
              />
              {errors.title && <p>{errors.title.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Posted By</label>
              <input
                type="text"
                name="by"
                placeholder="Posted By"
                {...register("postedby")}
                className={styles.input_}
              />
              {errors.postedby && <p>{errors.postedby.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Short Description</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="Short Description"
                {...register("short_description")}
              ></textarea>
              {errors.short_description && (
                <p>{errors.short_description.message}</p>
              )}
            </div>

            <div className={styles.input}>
              <label>About Author</label>
              <textarea
                className={styles.input_}
                style={{ resize: "none" }}
                rows="6"
                placeholder="About Author"
                {...register("about_author")}
              ></textarea>
              {errors.about_author && <p>{errors.about_author.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Amount</label>
              <input
                type="text"
                name="amount"
                placeholder="'100 $DEGEN' or '0.025 ETH' or '0.0075 ETH'"
                {...register("amount")}
                className={styles.input_}
              />
              {errors.amount && <p>{errors.amount.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Status</label>
              <select
                name="status"
                className={styles.input_}
                {...register("status")}
              >
                <option value="mint">Minting</option>
                <option value="start">Starts In</option>
                <option value="comp">Completed</option>
              </select>
              {errors.status && <p>{errors.status.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Period</label>
              <input
                type="text"
                name="period"
                placeholder="'Completed' or 'Now' or '1 day'"
                {...register("period")}
                className={styles.input_}
              />
              {errors.period && <p>{errors.period.message}</p>}
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Add NFT
            </button>
          </form>
        </div>
      </Content>
    </div>
  );
};
export default DropNew;
