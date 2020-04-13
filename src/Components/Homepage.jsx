import React from "react";
import styles from "../CSS/Homepage.module.css";
import Navbar from "../Components/Navbar";
import Icons from "../Components/Icons";
import Contact from "../Components/Contact";

function LeftPanel() {
  return (
    <div>
      <div className={styles.leftPanel}>
        <center>
          <Navbar />
          <h1 className={styles.titleText}>Sarah Vidler</h1>
          <h2 className={styles.titleText2}> = Coder = ~ Designer ~</h2>
          <p className={styles.welcomeText}>
            I've recently graduated from the Northcoders coding Bootcamp on
            07/02/2020. It's been an amazing few months and I have learned many
            new skills, most importantly the power of self belief and not giving
            in to the "imposter syndrome" that is so prevalent in the tech
            industry. I can't wait to begin a new career in tech, and I am
            currently looking for career opportunities.{" "}
          </p>
          <Icons />
        </center>
        <div className={styles.rightPanel}>
          <center>
            <img
              src="/myPortrait.jpg"
              alt="portrait"
              className={styles.portrait}
            />
            <Contact />
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

export default LeftPanel;
