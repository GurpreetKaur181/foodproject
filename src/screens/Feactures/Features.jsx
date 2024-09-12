import React from "react";
import styles from "./Features.module.css";

function Features() {
  return (
    <div className={styles.Features_container}>
      <div className={styles.image_container}>
        <img
          src="https://www.unileverfoodsolutions.co.in/wp-content/uploads/2023/09/Fast-Food-cover.png"
          alt="Features"
        />
        <div className={styles.heading_on_image}>Our Features</div>
      </div>
      <div className={styles.features_list}>
        <div className={styles.feature_item}>
          <h3 className={styles.feature_title}>Fresh Ingredients</h3>
          <p className={styles.feature_description}>
            At FoodApp, we believe that fresh ingredients are the key to a great
            meal. We source our produce from local farmers who use sustainable
            practices, ensuring that every ingredient is as fresh as possible.
            This commitment not only supports the local community but also
            enhances the flavor and nutritional value of our dishes. Our menu
            features a variety of seasonal fruits and vegetables, ensuring that
            our offerings are always in line with the freshest produce
            available.
          </p>
        </div>
        <div className={styles.feature_item}>
          <h3 className={styles.feature_title}>Locally Sourced</h3>
          <p className={styles.feature_description}>
            Supporting local farms and businesses is at the heart of what we do.
            By choosing locally sourced ingredients, we reduce our carbon
            footprint and contribute to the local economy. Our partnerships with
            regional suppliers ensure that we receive high-quality products
            while minimizing transportation emissions. This commitment to local
            sourcing helps us provide a better dining experience and fosters a
            sense of community.
          </p>
        </div>
        <div className={styles.feature_item}>
          <h3 className={styles.feature_title}>Diverse Menu</h3>
          <p className={styles.feature_description}>
            Our diverse menu caters to all tastes and dietary needs. From
            traditional comfort foods to modern culinary creations, we offer a
            range of options that satisfy various preferences. Whether you're a
            fan of classic dishes or looking to try something new, our menu is
            designed to provide something for everyone. We also accommodate
            dietary restrictions and preferences, ensuring that everyone can
            enjoy a delicious meal.
          </p>
        </div>
        <div className={styles.feature_item}>
          <h3 className={styles.feature_title}>Sustainable Practices</h3>
          <p className={styles.feature_description}>
            Sustainability is a core value at FoodApp. We implement eco-friendly
            practices throughout our operations, from reducing waste to using
            recyclable packaging. Our commitment to sustainability extends to
            every aspect of our business, including energy-efficient equipment
            and minimizing single-use plastics. By prioritizing these practices,
            we aim to reduce our environmental impact and contribute to a
            healthier planet.
          </p>
        </div>
        <div className={styles.feature_item}>
          <h3 className={styles.feature_title}>Exceptional Service</h3>
          <p className={styles.feature_description}>
            Providing exceptional service is fundamental to our mission. Our
            dedicated team is trained to offer a warm and welcoming dining
            experience, ensuring that every guest feels valued and cared for.
            From attentive service to personalized recommendations, we strive to
            make every visit memorable. We believe that great food deserves
            great service, and our team is committed to delivering both with
            enthusiasm and professionalism.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
