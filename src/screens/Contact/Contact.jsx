import React from "react";
import styles from "./Contact.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageOverlay}>
        <h1 className={styles.title}>Contact Us</h1>
      </div>
      <div className={styles.content}>
        {/* Get in Touch Box */}
        <div className={styles.formContainer}>
          <h2>Get in Touch</h2>
          <form className={styles.contactForm}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className={styles.inputField}
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles.inputField}
              required
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              className={styles.textArea}
              required
            ></textarea>

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Box */}
        <div className={styles.contactDetails}>
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong>
            <br />
            123 Culinary Street, Flavor Town, FT 45678
            <br />
            Gourmet Land
          </p>
          <p>
            <strong>Phone:</strong>
            <br />
            (123) 456-7890
          </p>
          <p>
            <strong>Email:</strong>
            <br />
            support@foodieflare.com
          </p>
        </div>
      </div>

      {/* Additional Content Below */}
      <div className={styles.additionalContent}>
        <div className={styles.infoBox}>
          <h3>Business Hours</h3>
          <p>Monday to Friday: 9 AM - 6 PM</p>
          <p>Saturday: 10 AM - 4 PM</p>
          <p>Sunday: Closed</p>
        </div>
        <div className={styles.infoBox}>
          <h3>Customer Support</h3>
          <p>
            We are committed to providing the best support. Reach out to us for
            any queries or issues.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
