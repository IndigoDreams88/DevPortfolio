import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Navbar.module.css";

function Navbar() {
  return (
    <div>
      <div className={styles.divContainer}>
        <div className={styles.background}>
          <Link to="/background" className={styles.links}>
            History
          </Link>
        </div>

        <div className={styles.artwork}>
          <Link to="/artwork" className={styles.links}>
            Artwork
          </Link>
        </div>

        <div className={styles.projects}>
          <Link to="/projects" className={styles.links}>
            Projects
          </Link>
        </div>

        <div className={styles.tech}>
          <Link to="/tech" className={styles.links}>
            Tech
          </Link>
        </div>

        <div className={styles.contact}>
          <Link to="/" className={styles.links}>
            Home
          </Link>
        </div>
      </div>
      <div className={styles.trianglesContainer}>
        <div className={styles.triangle1}></div>
        <div className={styles.triangle2}></div>
        <div className={styles.triangle3}></div>
        <div className={styles.triangle4}></div>
        <div className={styles.triangle5}></div>
      </div>
    </div>
  );
}

export default Navbar;
