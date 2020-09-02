import React, { Component } from "react";
import styles from "../CSS/NoughtsAndCrossesGame.module.css";

class NoughtsAndCrossesGame extends Component {
  state = {
    player1: true,
    P1Turn: 0,
    P2Turn: 0,
    board: {
      UL: "",
      UM: "",
      UR: "",
      ML: "",
      MM: "",
      MR: "",
      BL: "",
      BM: "",
      BR: "",
    },
    cross: (
      <img
        src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9Im5vbmUiIHBvaW50cz0iLTgwLjA3MSwyMCAtMTQxLjc2MiwyMCAtMTEwLjkxNyw1MC44NDYgIi8+DQo8cG9seWdvbiBmaWxsPSJub25lIiBwb2ludHM9Ii0xMzkuOTI5LDk0IC04MS45MDQsOTQgLTExMC45MTcsNjQuOTg4ICIvPg0KPHBvbHlnb24gZmlsbD0iI0NFNjIwMCIgcG9pbnRzPSI4Ny4wNzEsMTIgNzUuMTI5LDEyIDQ5LjA4Myw0My43OTYgMjMuMDM3LDEyIDExLjA5NSwxMiA0My4xMTIsNTAuOTQ1IDEyLjY0NCw4OCAyNC41ODUsODggDQoJNDkuMDgzLDU4LjA5NCA3My41ODEsODggODUuNTIzLDg4IDU1LjA1NCw1MC45NDUgIi8+DQo8L3N2Zz4NCg=="
        alt="cross"
        className={styles.cross}
      />
    ),
    counter: 0,
    winner: "Congratulations you've won!",
    noWin: false,
    winTag1: "Congratulations Player 1, you've won!",
    winTag2: "Congratulations Player 2, you've won!",
    P1Score: 0,
    P2Score: 0,
    winnerX: false,
    winnerO: false,
  };

  render() {
    return (
      <div>
        <p className={styles.outcomeText}>
          {this.checkResult(this.state.noWin)}
        </p>
        <div className={styles.gridContainer}>
          <div className={styles.instructions}>
            <h1 className={styles.headerSub}>Instructions:</h1>
            <p className={styles.instructionsText}>
              Submit two player names, then take it in turns to score three in a
              row, using your mouse to click the squares. Three in a row can be
              achieved by getting either three X's or 0's in a diagonal,
              horizontal or vertical line. Player 1 (X) goes first, then player
              2 (O). Good luck!
            </p>
          </div>

          <div className={styles.gridAndScoreBoardArea}>
            <ul className={styles.game}>
              <button
                onClick={() => {
                  this.toggleNoughtCross("UL");
                }}
                disabled={this.state.board["UL"] !== ""}
                id="UL"
                className={
                  this.state.board["UL"] === "O" ? styles.nought : null
                }
              >
                {this.state.board.UL === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("UM");
                }}
                disabled={this.state.board.UM !== ""}
                id="UM"
                className={this.state.board.UM === "O" ? styles.nought : null}
              >
                {this.state.board["UM"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("UR");
                }}
                disabled={this.state.board["UR"] !== ""}
                id="UR"
                className={
                  this.state.board["UR"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["UR"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("ML");
                }}
                disabled={this.state.board["ML"] !== ""}
                id="ML"
                className={
                  this.state.board["ML"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["ML"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("MM");
                }}
                disabled={this.state.board["MM"] !== ""}
                id="MM"
                className={
                  this.state.board["MM"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["MM"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("MR");
                }}
                disabled={this.state.board["MR"] !== ""}
                id="MR"
                className={
                  this.state.board["MR"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["MR"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("BL");
                }}
                disabled={this.state.board["BL"] !== ""}
                id="BL"
                className={
                  this.state.board["BL"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["BL"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("BM");
                }}
                disabled={this.state.board["BM"] !== ""}
                id="BM"
                className={
                  this.state.board["BM"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["BM"] === "X" ? this.state.cross : null}
              </button>
              <button
                onClick={() => {
                  this.toggleNoughtCross("BR");
                }}
                disabled={this.state.board["BR"] !== ""}
                id="BR"
                className={
                  this.state.board["BR"] === "O" ? styles.nought : null
                }
              >
                {this.state.board["BR"] === "X" ? this.state.cross : null}
              </button>
            </ul>

            <div className={styles.scoreboard}>
              <h1 className={styles.headerSub}>Scoreboard:</h1>
              <p className={styles.scoreboardText}>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9Im5vbmUiIHBvaW50cz0iLTgwLjA3MSwyMCAtMTQxLjc2MiwyMCAtMTEwLjkxNyw1MC44NDYgIi8+DQo8cG9seWdvbiBmaWxsPSJub25lIiBwb2ludHM9Ii0xMzkuOTI5LDk0IC04MS45MDQsOTQgLTExMC45MTcsNjQuOTg4ICIvPg0KPHBvbHlnb24gZmlsbD0iI0NFNjIwMCIgcG9pbnRzPSI4Ny4wNzEsMTIgNzUuMTI5LDEyIDQ5LjA4Myw0My43OTYgMjMuMDM3LDEyIDExLjA5NSwxMiA0My4xMTIsNTAuOTQ1IDEyLjY0NCw4OCAyNC41ODUsODggDQoJNDkuMDgzLDU4LjA5NCA3My41ODEsODggODUuNTIzLDg4IDU1LjA1NCw1MC45NDUgIi8+DQo8L3N2Zz4NCg=="
                  alt="cross"
                  className={styles.playerXImg}
                />
                {this.props.player1name}
                's Score:{this.state.P1Score}
              </p>
              <p className={styles.scoreboardText}>
                <img
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTAwcHgiIGhlaWdodD0iMTAwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMDAgMTAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiMwMDgzRDMiIGQ9Ik00OS42NjcsMjJjMTUuNDM5LDAsMjgsMTIuNTYxLDI4LDI4cy0xMi41NjEsMjgtMjgsMjhzLTI4LTEyLjU2MS0yOC0yOFMzNC4yMjcsMjIsNDkuNjY3LDIyIE00OS42NjcsMTINCgljLTIwLjk4NywwLTM4LDE3LjAxMy0zOCwzOHMxNy4wMTMsMzgsMzgsMzhzMzgtMTcuMDEzLDM4LTM4UzcwLjY1MywxMiw0OS42NjcsMTJMNDkuNjY3LDEyeiIvPg0KPC9zdmc+DQo="
                  alt="cross"
                  className={styles.playerOImg}
                />
                {this.props.player2name}
                's Score:{this.state.P2Score}
              </p>
              <center>
                <button className={styles.resetBtn} onClick={this.handleReset}>
                  Reset Board
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleReset = () => {
    this.setState({
      P1Turn: 0,
      P2Turn: 0,
      board: {
        UL: "",
        UM: "",
        UR: "",
        ML: "",
        MM: "",
        MR: "",
        BL: "",
        BM: "",
        BR: "",
      },
      player1: true,
      counter: 0,
      noWin: false,
      winnerX: false,
      winnerO: false,
    });
  };

  toggleNoughtCross = (position) => {
    let { P1Turn, P2Turn, player1, board } = this.state;
    if (P1Turn === P2Turn) {
      this.setState((currentState) => {
        return {
          P1Turn: currentState.P1Turn + 1,
          player1: false,
          counter: currentState.counter + 1,
          board: {
            ...currentState.board,
            [position]: "X",
          },
        };
      });
    } else {
      this.setState((currentState) => {
        return {
          P2Turn: currentState.P2Turn + 1,
          player1: true,
          counter: currentState.counter + 1,
          board: {
            ...currentState.board,
            [position]: "O",
          },
        };
      });
    }
  };

  checkResult = (noWin) => {
    if (noWin) {
      return "No winner this time";
    }
    const { UL, UM, UR, ML, MM, MR, BL, BM, BR } = this.state.board;
    const combinations = [
      [UL, UM, UR],
      [ML, MM, MR],
      [BL, BM, BR],
      [UL, MM, BR],
      [UR, MM, BL],
      [UL, ML, BL],
      [UM, MM, BM],
      [UR, MR, BR],
    ];

    let result;
    combinations.forEach((combination) => {
      if (
        this.checkSegment(combination[0], combination[1], combination[2]) &&
        combination[0] === "X"
      ) {
        result = this.state.winTag1;
        if (this.state.winnerX === false) {
          this.setState({ P1Score: this.state.P1Score + 1, winnerX: true });
        }
      } else if (
        this.checkSegment(combination[0], combination[1], combination[2]) &&
        combination[0] === "O"
      ) {
        result = this.state.winTag2;

        if (this.state.winnerO === false) {
          this.setState({ P2Score: this.state.P2Score + 1, winnerO: true });
        }
      }
    });

    return result;
  };

  checkSegment = (pos1, pos2, pos3) => {
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos1 === pos3) {
        return true;
      } else {
        return false;
      }
    }
  };

  componentDidUpdate(prevProps, prevState) {
    const { player1name, player2name } = this.props;
    const { P1Score, P2Score } = this.state;
    if (
      prevProps.player1name !== player1name &&
      prevProps.player2name !== player2name
    ) {
      this.setState({
        winTag1: `Congratulations ${player1name}, you've won!`,
        winTag2: `Congratulations ${player2name}, you've won!`,
      });
    }
    if (
      (this.state.counter === 9 && this.checkResult() !== this.state.winTag1) ||
      (this.state.counter === 9 && this.checkResult() !== this.state.winTag2)
    ) {
      return this.setState({ noWin: true, counter: 10 });
    }
  }
}

export default NoughtsAndCrossesGame;
