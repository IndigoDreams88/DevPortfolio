import React from "react";
import styles from "../CSS/Projects.module.css";
import Navbar from "../Components/Navbar";
import Icons from "../Components/Icons";
import Contact from "../Components/Contact";

function Projects() {
  return (
    <div>
      <div className={styles.leftPanel}>
        <center>
          <Navbar />
          <h1 className={styles.titleText}>Coding Projects</h1>
          <p className={styles.welcomeText}>
            During my time at Northcoders I made 2 projects. The first was a
            Reddit style news aggregate website which had it's own backend
            server and database as omy back end project, which I built using
            Node.js, Express, postgreSQL and Axios. Then the front end project
            was the user interface for this website, which I built using
            React.js, HTML and CSS. This project allowed users comment on
            articles, vote on them and their comments, and if they are logged
            in, to post and delete comments too. My final project was with a
            team of 4 other people and was an ambient sound web and mobile app
            which allowed users to create an account, customize and save their
            own ambient sounds. app.{" "}
          </p>
          <Icons />
        </center>
        <div className={styles.rightPanel}>
          <div className={styles.imgArea}>
            <center>
              <div className={styles.projectArea}>
                <a target="_blank" href="https://ambiscape.netlify.com/">
                  <div className={styles.Ambiscape}>
                    <img
                      src="/Ambiscape.png"
                      className={styles.AmbiscapeImg}
                      alt="websiteImg"
                    />
                    <div className={styles.linksArea}>
                      <a
                        href="https://github.com/IndigoDreams88/BE-Ambiscape"
                        className={styles.links1}
                      >
                        View back end code
                      </a>

                      <a
                        href="https://github.com/IndigoDreams88/FE-Ambiscape"
                        className={styles.links2}
                      >
                        View front end code
                      </a>
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://friendly-wescoff-74185a.netlify.app/"
                >
                  <div className={styles.NCNews}>
                    <img
                      src="/NCNewsChroniclesCats.png"
                      className={styles.NCNewsImg}
                      alt="websiteImg"
                    />
                    <div className={styles.linksArea}>
                      <a
                        href="https://github.com/IndigoDreams88/NCNewsChroniclesBERefactored"
                        className={styles.links1}
                      >
                        View back end code
                      </a>

                      <a
                        href="https://github.com/IndigoDreams88/NCNewsChroniclesFERefactored"
                        className={styles.links2}
                      >
                        View front end code
                      </a>
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://practical-brown-f8150b.netlify.com/"
                >
                  <div className={styles.desertAdventure}>
                    <img
                      src="/DesertAdventureGame.jpeg"
                      className={styles.desertAdventureImg}
                      alt="websiteImg"
                    />
                    <div className={styles.linksArea}>
                      <a
                        href="https://github.com/IndigoDreams88/DesertAdventureGame"
                        className={styles.links1}
                      >
                        View the code
                      </a>
                    </div>
                  </div>
                </a>

                <a
                  target="_blank"
                  href="https://github.com/IndigoDreams88/Fundamentals-Katas"
                >
                  <div className={styles.katas}>
                    <img
                      src="/abstractBackground.jpg"
                      className={styles.katasImg}
                      alt="websiteImg"
                    />
                    <div className={styles.linksArea}>
                      <a
                        href="https://github.com/IndigoDreams88/Fundamentals-Katas"
                        className={styles.links1}
                      >
                        View the code
                      </a>
                    </div>
                  </div>
                </a>
              </div>

              <div className={styles.contactDetails}>
                Email: svidler2011@gmail.com
              </div>
            </center>
          </div>
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

export default Projects;
