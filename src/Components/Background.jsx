import React from "react";
import styles from "../CSS/Background.module.css";
import Navbar from "../Components/Navbar";
import Icons from "../Components/Icons";
import Contact from "../Components/Contact";

function Background() {
  return (
    <div>
      <div className={styles.leftPanel}>
        <center>
          <Navbar />
          <h1 className={styles.titleText}>My Background</h1>
          <div className={styles.flipBox}>
            <div className={styles.flipBoxInner}>
              <div className={styles.flipBoxFront}>
                <p className={styles.backgroundInfo1}>
                  My background is predominantly in arts, languages, and
                  education. I studied GCSE Art at High school and AS-Level
                  Graphic Design at college. I have always had a passion for
                  art. In my mid twenties I had my own online shop selling
                  guinea-pig themed hand made gifts and artwork. I speak Spanish
                  to a working level proficiency and lived in Lerida in Spain
                  for 6 months, as well as Pisa in Italy for 6 months during my
                  degree year abroad. I can speak some Italian, and I can read
                  some basic French and Portuguese.
                  <div>
                    <img
                      src="https://clipartart.com/images/hand-drawn-arrow-clipart-21.jpg"
                      className={styles.arrow}
                      alt="arrow"
                    />
                  </div>
                </p>
              </div>
              <div className={styles.flipBoxBack}>
                <p className={styles.backgroundInfo2}>
                  I have recently left behind a successful career as a Spanish
                  Tutor and a primary school Teaching Assistant, where I
                  supported children with a range of special needs. I decided
                  that I wanted a new challenge in life, where I could use my
                  creative background and develop and learn new skills. So I
                  decided to train to become a Junior Software Developer at
                  Northcoders in Manchester. I would love to pursue work in this
                  field, especially work that allows me to use my art/design
                  skills in front end, as I particularly enjoyed this block
                  during the course.
                </p>
              </div>
            </div>
          </div>
          <Icons />
        </center>
        <div className={styles.rightPanel}>
          <center>
            <img
              src="/theBoys.jpg"
              alt="guineaPigs"
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

export default Background;
