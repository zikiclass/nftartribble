import React from "react";
import styles from "./css/quicksignup.module.css";
import { name } from "../../../env";
const QuickSignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>Stay in the loop</h2>
        <span>Get the latest insights</span>
      </div>
      <div className={styles.inputform}>
        <form action="">
          <input type="email" placeholder="Your e-mail" name="email" />
          <input type="submit" value="Sign up" />
        </form>
        <span>
          By clicking send you'll receive occasional emails from {name}. You
          always have the choice to unscubscribe within every email you receive.
        </span>
      </div>
    </div>
  );
};
export default QuickSignUp;
