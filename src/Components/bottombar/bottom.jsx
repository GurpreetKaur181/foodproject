import React from "react";
import styles from "./bottom.module.css";

function BottomBar() {
  return (
    <footer className={styles.bottomBar}>
      <div className={styles.section}>
        {/* Website Info */}
        <div className={styles.websiteInfo}>
          <h2>FoodieFlare</h2>
          <p>
            At FoodieFlare, we're passionate about food and bringing people
            together through culinary experiences. Our platform offers a diverse
            range of recipes, restaurant reviews, and food trends to satisfy
            every palate. Whether you're a home cook, a foodie, or simply
            looking for inspiration, FoodieFlare is your go-to destination for
            discovering new tastes and enjoying the art of dining. Join us in
            celebrating food and exploring flavors from around the globe.
          </p>
        </div>
      </div>

      <div className={styles.section}>
        {/* Quick Links */}
        <div className={styles.quickLinks}>
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/recipes">Recipes</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.section}>
        {/* Contact Us Form */}
        <div className={styles.contactForm}>
          <h2>Contact Us</h2>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.inputField}
            />
            <input
              type="email"
              placeholder="Your Email"
              className={styles.inputField}
            />
            <textarea
              placeholder="Your Message"
              className={styles.textArea}
            ></textarea>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default BottomBar;
