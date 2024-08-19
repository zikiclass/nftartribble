"use client";
import { useRef } from "react";
import SideBar from "../components/sidebar";
import Content from "../components/content";
import styles from "../dashboard/dashboard.module.css";
import UndoIcon from "@mui/icons-material/Undo";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { adminSchema } from "@/app/validationSchemas";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
const AdminNew = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(adminSchema) });
  return (
    <div className={styles.container}>
      <SideBar />
      <Content>
        <h3>Administrators</h3>
        <div className={styles.content}>
          <Link href="/admin/admin_" className={styles.btnBack}>
            <UndoIcon />
            Back
          </Link>

          <form
            action=""
            className={styles.form}
            onSubmit={handleSubmit(async (data) => {
              try {
                await axios.post("/api/register", { ...data });
                toast.success("Admin account added");
                router.push("/admin/admin_");
              } catch (error) {
                toast.error(error.message);
              }
            })}
          >
            <Toaster position="bottom-left" />
            <div className={styles.input}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                {...register("email")}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className={styles.input}>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p>{errors.confirmPassword.message}</p>
              )}
            </div>
            <button type="submit" className={styles.btnSubmit}>
              Create Account
            </button>
          </form>
        </div>
      </Content>
    </div>
  );
};
export default AdminNew;
