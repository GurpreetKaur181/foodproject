import styles from "./About.module.css";
function About() {
  return (
    <>
      <div className={styles.About_container}>
        <div className={styles.image_container}>
          <img
            src="https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q="
            alt="Not Found"
          />
          <div className={styles.heading_on_image}>About Us</div>
        </div>
        <div className={styles.container1}>
          <div className={styles.content}>
            At FoodApp, we believe that food is more than just a meal—it’s a way
            to connect, celebrate, and create memories. Since our founding in
            [Year], our mission has been to bring people together over
            flavorful, fresh, and thoughtfully prepared dishes. We focus on
            using locally sourced ingredients, supporting regional farmers and
            producers, to ensure that every bite is filled with the best that
            nature has to offer. Our chefs draw inspiration from both
            traditional recipes and modern culinary techniques to create a menu
            that is innovative yet comforting. Whether you’re in the mood for a
            simple, wholesome dish or something more adventurous, you’ll find a
            range of options that cater to every taste. We are proud to serve a
            variety of cuisines that reflect our diverse community, all while
            maintaining a commitment to sustainability and ethical sourcing. At
            FoodApp, we strive to offer more than just a dining experience. We
            aim to create a welcoming atmosphere where you feel at home. Join us
            and discover how food can be the perfect bridge between tradition
            and innovation, nourishing both body and soul.
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.heading}>Our Philosophy</div>
          <div className={styles.content}>
            At FoodApp, we are passionate about the art of cooking and the joy
            of sharing exceptional food. Our philosophy is rooted in the belief
            that quality ingredients are the cornerstone of memorable dishes. We
            are committed to sourcing the finest ingredients from local farmers
            and sustainable suppliers, ensuring that every meal we serve is
            fresh, flavorful, and responsibly produced. Our approach to food is
            holistic and inclusive. We strive to create a menu that caters to
            diverse dietary needs, from plant-based options to gluten-free
            choices, without ever compromising on taste. Each dish is crafted
            with care, reflecting our dedication to both innovation and
            tradition. Sustainability is central to our values. We actively work
            to minimize our environmental impact through practices like waste
            reduction and eco-friendly packaging. By prioritizing these efforts,
            we aim to contribute positively to the planet while delighting our
            community with exceptional food. At FoodApp, we believe that food is
            more than just sustenance; it’s a way to connect, celebrate, and
            make a positive difference. Join us in our journey to savor the best
            of what nature offers while making a meaningful impact, one
            delicious bite at a time.
          </div>
        </div>
        <div className={styles.container1}>
          <div className={styles.heading}>Our Mission</div>
          <div className={styles.content}>
            At FoodApp, our mission is to transform the way people experience
            food by fostering connection and celebration through every meal.
            Since our inception, we have been dedicated to bringing people
            together with a menu that emphasizes fresh, flavorful, and
            thoughtfully prepared dishes. We prioritize using locally sourced
            ingredients and supporting regional farmers to ensure that each bite
            is a testament to the quality and richness of nature's offerings.
            Our culinary team is inspired by a blend of traditional recipes and
            contemporary techniques, crafting a diverse menu that caters to all
            tastes and preferences. Whether you’re craving a classic comfort
            dish or something more adventurous, our offerings are designed to
            delight and satisfy. We are committed to sustainability and ethical
            practices, reflecting our dedication to both the environment and our
            community. At FoodApp, we strive to create more than just a dining
            experience; we aim to offer a welcoming environment where you feel
            truly at home. Join us as we bridge the gap between tradition and
            innovation, enriching lives one meal at a time.
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
