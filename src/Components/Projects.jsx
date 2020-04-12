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
                      src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/90342589_10157899244123467_4270764648480899072_n.jpg?_nc_cat=103&_nc_sid=e007fa&_nc_oc=AQnfglNUCTQT4O8uVe1tIg8CF2dOBWjQD83eleTgZGTKNjDVKjvsIswb9F3t3McvY_o&_nc_ht=scontent-lht6-1.xx&oh=7fd95b1071322d41a6fc24a96dc8403e&oe=5E929690"
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
                  href="https://5e2592241fec0681776afc2c--zen-aryabhata-2c1646.netlify.com/"
                >
                  <div className={styles.NCNews}>
                    <img
                      src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/89786183_10157899245038467_7897954904654741504_n.jpg?_nc_cat=106&_nc_sid=e007fa&_nc_oc=AQnEDbgh2dgLRSUSfgPFuKJ_BP7VGqbpiG1ns82s5n9ILX31dG5mnpzb9ht6bN_X-gM&_nc_ht=scontent-lht6-1.xx&oh=4860f1fd5f68dc9dda39d6127031e667&oe=5E93704A"
                      className={styles.NCNewsImg}
                      alt="websiteImg"
                    />
                    <div className={styles.linksArea}>
                      <a
                        href="https://github.com/IndigoDreams88/nc-news-project.git"
                        className={styles.links1}
                      >
                        View back end code
                      </a>

                      <a
                        href="https://github.com/IndigoDreams88/NC-News-Chronicles-Final.git"
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
