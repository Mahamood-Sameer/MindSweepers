import React, { useEffect, useState } from "react";
import "./Game.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import image from "../Images/Screenshot (98).png";
import { Avatar } from "@mui/material";
import Input from "@mui/material/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const ariaLabel = { "aria-label": "description" };

function Game() {
  // Players
  const [player, setPlayer] = useState(1);
  // Sieve for finding primes
  const PRIMES = new Array(41);
  for (let i = 0; i < 41; i++) {
    PRIMES[i] = 1;
  }
  PRIMES[0] = 0;
  PRIMES[1] = 0;
  for (let i = 2; i < 41; i++) {
    if (PRIMES[i]) {
      for (let j = i * 2; j < 41; j += i) {
        PRIMES[j] = 0;
      }
    }
  }
  // Hash map for frequency
  const [Hash, setHash] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  // Setting array to null
  const [arr, setarr] = useState([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
  const board = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ];
  // Disable
  const [disable, setdisable] = useState([
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false],
  ]);

  // Onchange event call
  const handleChange = (row, column, event) => {
    let copy = [...arr];
    copy[row][column] = event.target.value;
    setarr(copy);
  };

  // Snackbar open-->Error
  const [open, setOpen] = React.useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  // Snackbar open-->Warning
  const [openwar, setOpenwar] = React.useState(false);

  const handleClickwar = () => {
    setOpenwar(true);
  };

  const handleClosewar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenwar(false);
  };

  // Players name
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");

  // gcd Claculator
  const gcd = (a, b) => {
    if (a === 0) return b;
    return gcd(b % a, a);
  };

  // Diagonals Check
  const CheckDiagonals = (i, j) => {
    if (arr[i][j]) {
      if (Hash[parseInt(arr[i][j])] === 0) {
        let copy = [...Hash];
        copy[parseInt(arr[i][j])] = 1;
        setHash(copy);
        let temp = parseInt(arr[i][j]);

        var diagonalgcd = parseInt(arr[i][j]);
        // First  diagonal
        let p = i - 1,
          q = j - 1;
        while (p >= 0 && q >= 0) {
          if (arr[p][q]) {
            diagonalgcd = gcd(diagonalgcd, parseInt(arr[p][q]));
          }
          p--;
          q--;
        }
        let m = i + 1,
          n = j + 1;
        while (m < 10 && n < 10) {
          if (arr[m][n]) {
            diagonalgcd = gcd(diagonalgcd, parseInt(arr[m][n]));
          }
          m++;
          n++;
        }
        if (diagonalgcd === 1) {
          handleClick();
          let copy = [...arr];
          copy[i][j] = "";
          setarr(copy);
          let copy2 = [...Hash];
          copy2[parseInt(arr[i][j])] = 0;
          setHash(copy2);
          return;
        }
        // Second  diagonal
        diagonalgcd = parseInt(arr[i][j]);
        p = i - 1;
        q = j + 1;
        while (p >= 0 && q < 10) {
          if (arr[p][q]) {
            diagonalgcd = gcd(diagonalgcd, parseInt(arr[p][q]));
          }
          p--;
          q++;
        }
        m = i + 1;
        n = j - 1;
        while (m < 10 && n >= 0) {
          if (arr[m][n]) {
            diagonalgcd = gcd(diagonalgcd, parseInt(arr[m][n]));
          }
          m++;
          n--;
        }
        if (diagonalgcd === 1) {
          handleClick();
          let copy = [...arr];
          copy[i][j] = "";
          setarr(copy);
          let copy2 = [...Hash];
          copy2[parseInt(arr[i][j])] = 0;
          setHash(copy2);
          return;
        }
        if (PRIMES[temp] && temp > 20) {
          // First above diagonal
          let p = i - 1,
            q = j - 1;
          while (p >= 0 && q >= 0) {
            document.getElementById(`${p}_${q}`).style.backgroundColor = "red";
            var cpydis1 = [...disable];
            cpydis1[p][q] = true;
            setdisable(cpydis1);
            p--;
            q--;
          }
          p = i - 1;
          q = j + 1;
          while (p >= 0 && q < 10) {
            document.getElementById(`${p}_${q}`).style.backgroundColor = "red";
            var cpydis2 = [...disable];
            cpydis2[p][q] = true;
            setdisable(cpydis2);
            p--;
            q++;
          }
          // Second below diagonal
          let m = i + 1,
            n = j + 1;
          while (m < 10 && n < 10) {
            document.getElementById(`${m}_${n}`).style.backgroundColor = "red";
            var cpydis3 = [...disable];
            cpydis3[m][n] = true;
            setdisable(cpydis3);
            m++;
            n++;
          }
          m = i + 1;
          n = j - 1;
          while (m < 10 && n >= 0) {
            document.getElementById(`${m}_${n}`).style.backgroundColor = "red";
            var cpydis4 = [...disable];
            cpydis4[m][n] = true;
            setdisable(cpydis4);
            m++;
            n--;
          }
        }
        var cpydis5 = [...disable];
        cpydis5[i][j] = true;
        setdisable(cpydis5);
        setPlayer((player) => (player + 1) % 2);
        checkthepossibilites(parseInt(arr[i][j]));
        declare();
      } else {
        handleClickwar();
        let copy = [...arr];
        copy[i][j] = "";
        setarr(copy);
      }
    }
  };

  const [open_winner, setopenWinner] = useState(false);

  const handleClickOpen_winner = () => {
    setopenWinner(true);
  };

  const handleClose_winner = () => {
    setopenWinner(false);
  };
  // Winner
  const declare = () => {
    var count = 0;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (disable[i][j]) {
          count++;
        }
      }
    }
    if (count == 100) {
      handleClickOpen_winner();
    }
  };

  // Claculating Each and every box possibility

  const DiagonalCheck = (temp, i, j) => {
    var diagonalgcd = temp;
    // First  diagonal
    let p = i - 1,
      q = j - 1;
    while (p >= 0 && q >= 0) {
      if (arr[p][q] !== "") {
        diagonalgcd = gcd(diagonalgcd, parseInt(arr[p][q]));
      }
      p--;
      q--;
    }
    let m = i + 1,
      n = j + 1;
    while (m < 10 && n < 10) {
      if (arr[m][n] !== "") {
        diagonalgcd = gcd(diagonalgcd, parseInt(arr[m][n]));
      }
      m++;
      n++;
    }
    if (diagonalgcd === 1) {
      return false;
    }
    // Second  diagonal
    diagonalgcd = temp;
    p = i - 1;
    q = j + 1;
    while (p >= 0 && q < 10) {
      if (arr[p][q] !== "") {
        diagonalgcd = gcd(diagonalgcd, parseInt(arr[p][q]));
      }
      p--;
      q++;
    }
    m = i + 1;
    n = j - 1;
    while (m < 10 && n >= 0) {
      if (arr[m][n] !== "") {
        diagonalgcd = gcd(diagonalgcd, parseInt(arr[m][n]));
      }
      m++;
      n--;
    }
    if (diagonalgcd === 1) {
      return false;
    }

    return true;
  };

  const checkthepossibilites = (number) => {
    Hash[number] = 1;
    var remaining = 0;
    for (var p = 1; p < 41; p++) {
      if (Hash[p] === 0) {
        remaining++;
      }
    }

    var count = 0;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        count = 0;
        if (arr[i][j] === "") {
          for (var k = 1; k < 41; k++) {
            if (Hash[k] === 0) {
              if (DiagonalCheck(k, i, j) === false) {
                count++;
              }
            }
          }
          if (count === remaining) {
            console.log("Not needed");
            document.getElementById(`${i}_${j}`).style.backgroundColor = "red";
            var cpydis = [...disable];
            cpydis[i][j] = true;
            setdisable(cpydis);
          }
        }
      }
    }
  };

  const HOVEREFFECT = (row, col, color) => {
    //top right diagonal;
    var i = row;
    var j = col;
    while (i >= 0 && j >= 0) {
      if (arr[i][j] === "" && !disable[i][j]) {
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;
      }
      i--;
      j--;
    }
    //Bottom left diagonal
    i = row;
    j = col;
    while (i <= 9 && j <= 9) {
      if (arr[i][j] === "" && !disable[i][j]) {
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;
      }
      i++;
      j++;
    }
    //Top right diagonal
    i = row;
    j = col;
    while (i >= 0 && j <= 9) {
      if (arr[i][j] === "" && !disable[i][j]) {
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;
      }
      i--;
      j++;
    }
    //Top right diagonal
    i = row;
    j = col;
    while (i <= 9 && j >= 0) {
      if (arr[i][j] === "" && !disable[i][j]) {
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;
      }
      i++;
      j--;
    }
  };
  const HOVEREFFECTREMOVER = (row, col, color) => {
    //top right diagonal;
    var i = row;
    var j = col;
    while (i >= 0 && j >= 0) {
      if (!disable[i][j])
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;

      i--;
      j--;
    }
    //Bottom left diagonal
    i = row;
    j = col;
    while (i <= 9 && j <= 9) {
      if (!disable[i][j])
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;

      i++;
      j++;
    }
    //Top right diagonal
    i = row;
    j = col;
    while (i >= 0 && j <= 9) {
      if (!disable[i][j])
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;

      i--;
      j++;
    }
    //Top right diagonal
    i = row;
    j = col;
    while (i <= 9 && j >= 0) {
      if (!disable[i][j])
        document.getElementById(`${i}_${j}`).style.backgroundColor = color;
      i++;
      j--;
    }
  };

  return (
    <>
      <div className="game_container">
        <div className="left_side_board">
          <div className="left_side_image_container">
            <img src={image} alt="" className="image_game" />
          </div>

          <div className="left_side_player_container">
            <div className="player_info_box">
              {player === 1 ? (
                <ArrowForwardIcon className="player_turn" />
              ) : null}

              <div className="player_info">
                <Avatar src="https://avatars.githubusercontent.com/u/86797046?v=4" />
                <Input
                  className="player_name"
                  placeholder="Player-1"
                  inputProps={ariaLabel}
                  value={player1}
                  onChange={(e) => setplayer1(e.target.value)}
                />
              </div>
            </div>
            <div className="player_info_box">
              {player === 0 ? (
                <ArrowForwardIcon className="player_turn" />
              ) : null}
              <div className="player_info">
                <Avatar src="https://avatars.githubusercontent.com/u/86797096?v=5" />
                <Input
                  className="player_name"
                  placeholder="Player-2"
                  inputProps={ariaLabel}
                  value={player2}
                  onChange={(e) => setplayer2(e.target.value)}
                />
              </div>
            </div>
          </div>
          <h3>Numbers remaining to use : </h3>
          <div className="numbers_can_be_used">
            {Hash?.map((number, i) => {
              if (!number && i !== 0 && i !== 1) return <p>{i}</p>;
            })}
          </div>
        </div>
        <div className="game_board_container">
          <div className="gameboard">
            {board.map(function (row, i) {
              return (
                <div className={`rows_${i} rows`}>
                  {row.map((col, j) => (
                    <input
                      autoComplete="off"
                      placeholder={`(${i + 1},${j + 1})`}
                      value={arr[i][j]}
                      className={`row_${i}_col_${j} boxes`}
                      onChange={(e) => {
                        handleChange(i, j, e);
                      }}
                      onBlur={() => {
                        CheckDiagonals(i, j);
                      }}
                      id={`${i}_${j}`}
                      disabled={disable[i][j]}
                      onMouseEnter={() => {
                        HOVEREFFECT(i, j, "green");
                      }}
                      onMouseLeave={() => {
                        HOVEREFFECTREMOVER(i, j, "white");
                      }}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SnackBar */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          GCD of the diagonal is 1 !
        </Alert>
      </Snackbar>

      {/* SnackBar */}
      <Snackbar open={openwar} autoHideDuration={5000} onClose={handleClosewar}>
        <Alert
          onClose={handleClosewar}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Number Repeation is not allowed
        </Alert>
      </Snackbar>

      {/* Winner Declaration */}
      <Dialog
        open={open_winner}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose_winner}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Congratulations 🎉🎊"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {player == 1 ? <span>{player2}</span> : <span>{player1}</span>} won
            the game
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose_winner}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Game;
