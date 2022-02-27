import React, { useEffect, useState } from "react";
import "./Game.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import image from "../Images/Screenshot (98).png";
import { Avatar } from "@mui/material";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

function Game() {
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
  const [player1,setplayer1]=useState("");
  const [player2,setplayer2]=useState("");

  // gcd Claculator
  const gcd = (a, b) => {
    if (a === 0) return b;
    console.log(a, b);
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
            p--;
            q--;
          }
          p = i - 1;
          q = j + 1;
          while (p >= 0 && q < 10) {
            document.getElementById(`${p}_${q}`).style.backgroundColor = "red";
            p--;
            q++;
          }
          // Second below diagonal
          let m = i + 1,
            n = j + 1;
          while (m < 10 && n < 10) {
            document.getElementById(`${m}_${n}`).style.backgroundColor = "red";
            m++;
            n++;
          }
          m = i + 1;
          n = j - 1;
          while (m < 10 && n >= 0) {
            document.getElementById(`${m}_${n}`).style.backgroundColor = "red";
            m++;
            n--;
          }
        }
      } else {
        handleClickwar();
        let copy = [...arr];
        copy[i][j] = "";
        setarr(copy);
      }
    }
  };

  useEffect(() => {}, []);

  return (
    <>
      <div className="game_container">
        <div className="left_side_board">
          <div className="left_side_image_container">
            <img src={image} alt="" className="image_game" />
          </div>
          <div className="left_side_player_container">
            <div className="player_info">
              <Avatar src="https://avatars.githubusercontent.com/u/86797046?v=4"/>
              <Input className="player_name" placeholder="Player-1" inputProps={ariaLabel} value={player1} onChange={(e)=>setplayer1(e.target.value)} />
            </div>
            <div className="player_info">
              <Avatar src="https://avatars.githubusercontent.com/u/86797096?v=5" />
              <Input className="player_name" placeholder="Player-2" inputProps={ariaLabel} value={player2} onChange={(e)=>setplayer2(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="game_board_container">
          <div className="gameboard">
            {board.map(function (row, i) {
              return (
                <div className={`rows_${i} rows`}>
                  {row.map((col, j) => (
                    <input
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
    </>
  );
}

export default Game;
