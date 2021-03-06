import React, { Component } from "react";
import styles from "../CSS/Artwork.module.css";
import Navbar from "../Components/Navbar";
import Icons from "../Components/Icons";
import Contact from "../Components/Contact";
import data from "../Components/Data";

class Artwork extends Component {
  state = {
    currentIndex: 1,
    currentIndexURL: "",
    picturesArray: data,
  };

  nextProperty = () => {
    if (this.state.currentIndex < this.state.picturesArray.length - 1) {
      const newIndex = this.state.currentIndex + 1;
      this.setState({
        currentIndex: newIndex,
      });
      console.log(this.state.currentIndex);
    }
  };

  prevProperty = () => {
    const newIndex = this.state.currentIndex - 1;
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: newIndex,
      });
      console.log(this.state.currentIndex);
    }
  };

  render() {
    const { currentIndex, currentIndexURL, picturesArray } = this.state;
    console.log(currentIndex, currentIndexURL);

    return (
      <div>
        <div className={styles.leftPanel}>
          <center>
            <Navbar />
            <h1 className={styles.titleText}>My Artwork</h1>
            <p className={styles.welcomeText}>
              I have experience of working with many different medias, ranging
              from; pencil, coloured pencil, oil pastel, chalk, paint, clay,
              paper craft, sewing, beading, and needle felting. In the future I
              hope to create digital art, and use it in web / app designs.
            </p>

            <Icons />
          </center>
          <div className={styles.rightPanel}>
            <center>
              <div className={styles.mainImgArea}>
                <div className={styles.imgIconArea}>
                  <img
                    src={picturesArray[0].img}
                    alt="artwork"
                    className={
                      currentIndex === 0 ? styles.selectedImg : styles.imgIcons
                    }
                    onClick={() => this.selectMiniImg(0)}
                  />
                  <img
                    src={picturesArray[1].img}
                    alt="artwork"
                    className={
                      currentIndex === 1 ? styles.selectedImg : styles.imgIcons
                    }
                    onClick={() => this.selectMiniImg(1)}
                  />
                  <img
                    src={picturesArray[2].img}
                    alt="artwork"
                    className={
                      currentIndex === 2 ? styles.selectedImg : styles.imgIcons
                    }
                    onClick={() => this.selectMiniImg(2)}
                  />
                  <img
                    src={picturesArray[3].img}
                    alt="artwork"
                    className={
                      currentIndex === 3 ? styles.selectedImg : styles.imgIcons
                    }
                    onClick={() => this.selectMiniImg(3)}
                  />
                  <img
                    src={picturesArray[4].img}
                    alt="artwork"
                    className={
                      currentIndex === 4 ? styles.selectedImg : styles.imgIcons
                    }
                    onClick={() => this.selectMiniImg(4)}
                  />
                </div>
                <img
                  src="/icons8-back-50.png"
                  alt="leftArrow"
                  className={styles.leftArrow}
                  onClick={() => this.prevProperty()}
                />

                <img
                  src={picturesArray[currentIndex].img}
                  alt="artwork"
                  className={styles.mainImg}
                />

                <img
                  src="/icons8-forward-50.png"
                  alt="rightArrow"
                  className={styles.rightArrow}
                  onClick={() => this.nextProperty()}
                />
              </div>
              <div className={styles.textArea}>
                <p className={styles.textStyle}>
                  {picturesArray[currentIndex].text}
                </p>
              </div>
              <div className={styles.imgIconArea}>
                <img
                  src={picturesArray[5].img}
                  alt="artwork"
                  className={
                    currentIndex === 5 ? styles.selectedImg : styles.imgIcons
                  }
                  onClick={() => this.selectMiniImg(5)}
                />
                <img
                  src={picturesArray[6].img}
                  alt="artwork"
                  className={
                    currentIndex === 6 ? styles.selectedImg : styles.imgIcons
                  }
                  onClick={() => this.selectMiniImg(6)}
                />
                <img
                  src={picturesArray[7].img}
                  alt="artwork"
                  className={
                    currentIndex === 7 ? styles.selectedImg : styles.imgIcons
                  }
                  onClick={() => this.selectMiniImg(7)}
                />
                <img
                  src={picturesArray[8].img}
                  alt="artwork"
                  className={
                    currentIndex === 8 ? styles.selectedImg : styles.imgIcons
                  }
                  onClick={() => this.selectMiniImg(8)}
                />
                <img
                  src={picturesArray[9].img}
                  alt="artwork"
                  className={
                    currentIndex === 9 ? styles.selectedImg : styles.imgIcons
                  }
                  onClick={() => this.selectMiniImg(9)}
                />
              </div>
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

  selectMiniImg = (slideNum) => {
    const selected = this.state.picturesArray.filter((picture) => {
      if (slideNum === picture.id) {
        return picture.img;
      }
    })[0];

    return this.setState({
      currentIndex: slideNum,
      currentIndexURL: selected,
    });
  };
}

export default Artwork;
