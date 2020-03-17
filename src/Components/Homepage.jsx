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
              src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/88151890_10157870169663467_6306148425989619712_n.jpg?_nc_cat=100&_nc_sid=e007fa&_nc_oc=AQkcGsSdgBluNypicz0233qucetbdsQUfU2ksdA-gOCN-lVQGwxa28KgQt1F8AISr6E&_nc_ht=scontent-lht6-1.xx&oh=f54e8d70bae0c9d8d41440ada169c18d&oe=5E80AE8B"
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
