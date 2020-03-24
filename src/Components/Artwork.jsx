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
    picturesArray: data
  };

  nextProperty = () => {
    if (this.state.currentIndex < this.state.picturesArray.length - 1) {
      const newIndex = this.state.currentIndex + 1;
      this.setState({
        currentIndex: newIndex
      });
      console.log(this.state.currentIndex);
    }
  };

  prevProperty = () => {
    const newIndex = this.state.currentIndex - 1;
    if (this.state.currentIndex > 0) {
      this.setState({
        currentIndex: newIndex
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
                  src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/cp0/90386183_10157926150758467_162328550945325056_n.jpg?_nc_cat=105&_nc_sid=e007fa&_nc_oc=AQlPeFF9Dd1WCSTP7ejFMQ6baHfMkMjVFviBSekEwHvmukQ-Uhbe8QIGNEIE6xqATx8&_nc_ht=scontent-lht6-1.xx&oh=ce9d3012db7cf21513ad990b554d16bc&oe=5E9B3971"
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
                  src="https://scontent-lhr8-1.xx.fbcdn.net/v/t1.0-9/cp0/91002920_10157926150863467_349901171604848640_n.jpg?_nc_cat=102&_nc_sid=e007fa&_nc_oc=AQkftfg4F9MGz_WtPSvCg3byONgAez4voQS2MRpzpZfxcSTZmsD2V7BNWL0F3711hIE&_nc_ht=scontent-lhr8-1.xx&oh=6fa68c884b8523e0e6accb3c86619044&oe=5E9B91D7"
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

  selectMiniImg = slideNum => {
    const selected = this.state.picturesArray.filter(picture => {
      if (slideNum === picture.id) {
        return picture.img;
      }
    })[0];

    return this.setState({
      currentIndex: slideNum,
      currentIndexURL: selected
    });
  };
}

export default Artwork;
