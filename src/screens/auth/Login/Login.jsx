import React from "react";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.imageSide}>
        <img
          src="https://www.unileverfoodsolutions.co.in/wp-content/uploads/2023/09/Fast-Food-cover.png"
          alt="Food Items"
          className={styles.backgroundImage}
        />
      </div>
      <div className={styles.formSide}>
        <div className={styles.formContainer}>
          <h1 className={styles.loginTitle}>Login to FoodApp</h1>
          <form className={styles.form}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
