import React from "react";
import styles from "./Register.module.css";

function Register() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.formSide}>
        <div className={styles.formContainer}>
          <h1 className={styles.registerTitle}>Register on FoodApp</h1>
          <form className={styles.form}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
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
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              required
            />
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
        </div>
      </div>
      <div className={styles.imageSide}>
        <img
          src="https://www.unileverfoodsolutions.co.in/wp-content/uploads/2023/09/Fast-Food-cover.png"
          alt="Food Items"
          className={styles.backgroundImage}
        />
      </div>
    </div>
  );
}

export default Register;
