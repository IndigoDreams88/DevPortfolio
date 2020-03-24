import React from "react";
import styles from "../CSS/Tech.module.css";
import Navbar from "../Components/Navbar";
import Icons from "../Components/Icons";
import Contact from "../Components/Contact";
import NoughtsAndCrossesGame from "../Components/NoughtsAndCrossesGame";

function Tech() {
  return (
    <div>
      <div className={styles.leftPanel}>
        <center>
          <Navbar />
          <h1 className={styles.titleText}>Developer work</h1>
          <p className={styles.welcomeText}>
            I have recently completed a full stack coding boot camp at
            Northcoders in Manchester, which teaches a practical industry led
            curriculum. All code was TDD and utilized version control using Git
            and Github, and a mixture of solo and paired sprints throughout. The
            main language that I learned during the course was JavaScript, but I
            also know some SQL (postgreSQL) too. I also have experience of
            coding in Express, Node.js, HTML 5, CSS 3, React and React-Native.
            Additionally I have knowledge and experience of using Photoshop,
            Paint Shop Pro 9 and GIMP for photo manipulations and graphic
            design.
          </p>
          <Icons />
        </center>
        <div className={styles.rightPanel}>
          <center>
            <h1 className={styles.mainHeading}>Noughts and Crosses</h1>

            <NoughtsAndCrossesGame />
          </center>

          <center>
            <div className={styles.contactDetails}>
              Email: svidler2011@gmail.com
            </div>
          </center>
        </div>
      </div>
      <div>
        <center>
          <p className={styles.credits}>
            Background image credit to kjpargeter freepix
          </p>
        </center>
      </div>
    </div>
  );
}

export default Tech;
