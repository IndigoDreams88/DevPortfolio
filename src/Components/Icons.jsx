import React from "react";
import styles from "../CSS/Icons.module.css";

function Icons() {
  return (
    <div>
      <center>
        <a
          target="_blank"
          href="https://www.codewars.com/users/svidler2011@gmail.com"
        >
          <img
            className={styles.icons}
            alt="icon"
            src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/codewars-512.png"
          />{" "}
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/sarah-vidler-077644138/"
        >
          <img
            className={styles.icons}
            alt="icon"
            src="https://image.flaticon.com/icons/png/512/61/61109.png"
          />
        </a>
        <a target="_blank" href="https://github.com/IndigoDreams88">
          <img
            className={styles.icons}
            alt="icon"
            src="https://image.flaticon.com/icons/png/512/25/25231.png"
          />
        </a>
      </center>
    </div>
  );
}

export default Icons;
