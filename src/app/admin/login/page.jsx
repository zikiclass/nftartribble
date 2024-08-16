import React from "react";
import styles from "./login.module.css";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import { name } from "../../../../env";
const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <form action="" className={styles.content}>
          <Image src={logo} alt={name} className={styles.logo} />
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
