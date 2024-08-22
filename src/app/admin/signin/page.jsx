"use client";
import React from "react";
import styles from "./signin.module.css";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { name } from "../../../../env";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
const Login = () => {
  const router = useRouter();
  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: email.value,
        password: password.value,
      });

      if (result.error) {
        toast.error("Invalid login details.");
      } else {
        router.push("/admin/dashboard");
      }
    } catch (error) {
      console.error("Sign in error:", error);
      toast.error("Sign in failed. Please try again.");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form className={styles.content} onSubmit={handleSignIn}>
          <Image src={logo} alt={name} className={styles.logo} />
          <Toaster position="bottom-left" />
          <div className={styles.input}>
            <label>Email address</label>
            <input
              type="email"
              required
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.input}>
            <label>Password</label>
            <input
              type="password"
              required
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className={styles.remember}>
            <input type="checkbox" name="remember" /> <span>Remember me</span>
          </div>
          <button type="submit" className={styles.button}>
            Log In
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
