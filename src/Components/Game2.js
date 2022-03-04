import React, { useEffect, useState } from "react";
import "./Game2.css";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import image from "../Images/Screenshot (98).png";
import { Avatar } from "@mui/material";
import Input from "@mui/material/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ariaLabel = { "aria-label": "description" };

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Game2() {
  var arr = new Array(100);
  for (var i = 0; i < 100; i++) {
    arr[i] = 0;
  }
  const [hash, sethash] = useState(arr);
  const board = [
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
    [0, 0],
    [0],
  ];

  //   Value of boxes

  const [values, setValues] = useState([
    [""],
    ["", ""],
    ["", "", ""],
    ["", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", ""],
    ["", "", ""],
    ["", ""],
    [""],
  ]);

  const [disable, setDiabsle] = useState([
    [false],
    [false, false],
    [false, false, false],
    [false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false],
    [false, false, false],
    [false, false],
    [false],
  ]);

  //   Setting values
  const handleChange = (row, column, event) => {
    let copy = [...values];
    copy[row][column] = event.target.value;
    setValues(copy);
  };

  //   Player
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [player, setplayer] = useState(1);

  //   Players total
  const [player1_total, setplayer1_total] = useState(0);
  const [player2_total, setplayer2_total] = useState(0);
  const [number_used, setnumber_used] = useState(1);

  // ALert
  const [openalert, setopenalert] = useState(false);
  const handleClosewar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopenalert(false);
  };
  // Number ALert
  const [openalert_num, setopenalert_num] = useState(false);
  const handleClosewar_num = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setopenalert_num(false);
  };

  // Game function
  const GameFunction = (row, col) => {
    if (hash[parseInt(values[row][col])] >= 2) {
      setopenalert_num(true);
      let copy = [...values];
      copy[row][col] = "";
      setValues(copy);
      return;
    } else {
      if (values[row][col]) {
        var color;
        if (player === 1) {
          if (parseInt(values[row][col]) !== number_used) {
            setopenalert(true);
            let copy = [...values];
            copy[row][col] = "";
            setValues(copy);
            return;
          }
          color = "#cc2dcc";
          setplayer1_total((e) => {
            return e + parseInt(values[row][col]);
          });
          setnumber_used(parseInt(values[row][col]));
        } else {
          if (parseInt(values[row][col]) !== number_used) {
            setopenalert(true);
            let copy = [...values];
            copy[row][col] = "";
            setValues(copy);
            return;
          }
          color = "orange";
          setplayer2_total((e) => {
            return e + parseInt(values[row][col]);
          });
          setnumber_used((e)=>(e+1));
        }
        document.getElementById(
          `rows_${row}_cols_${col}`
        ).style.backgroundColor = color;
        document.getElementById(`rows_${row}_cols_${col}`).style.color =
          "white";
        let copy = [...disable];
        copy[row][col] = true;
        setDiabsle(copy);
        setplayer((e) => {
          return (e + 1) % 2;
        });
        let copy1 = [...hash];
        copy1[parseInt(values[row][col])] += 1;
        sethash(copy1);
      }
    }
  };
  return (
    <>
      <div className="game2_container">
        <div className="left_side_board">
          <div className="left_side_image_container">
            <img src={image} alt="" className="image_game" />
          </div>

          <div className="left_side_player_container_game2">
            <div className="player_info_box">
              {player === 1 ? (
                <ArrowForwardIcon className="player_turn" />
              ) : null}

              <div className="player_info">
                <Avatar src="https://avatars.githubusercontent.com/u/36797093?v=5" />
                <Input
                  className="player_name"
                  placeholder="Player-1"
                  inputProps={ariaLabel}
                  value={player1}
                  onChange={(e) => setplayer1(e.target.value)}
                />
              </div>
              <p className="score">Total : {player1_total}</p>
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
              <p className="score">Total : {player2_total}</p>
            </div>
            <div className="number_should_use">
              <h3>Number should be used : {number_used}</h3>
            </div>
          </div>
        </div>
        <div className="game_board">
          {board.map((row, i) => (
            <div className="rows">
              {row.map((col, j) => (
                <input
                  autoComplete="off"
                  type="text"
                  className={`board_boxes`}
                  id={`rows_${i}_cols_${j}`}
                  value={`${values[i][j]}`}
                  onChange={(e) => {
                    handleChange(i, j, e);
                  }}
                  onBlur={() => {
                    GameFunction(i, j);
                  }}
                  disabled={disable[i][j]}
                  placeholder={`${i + 1},${j + 1}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Alet box */}
      <Snackbar
        open={openalert}
        autoHideDuration={5000}
        onClose={handleClosewar}
      >
        <Alert
          onClose={handleClosewar}
          severity="warning"
          sx={{ width: "100%" }}
        >
          You can only use {number_used} !
        </Alert>
      </Snackbar>
      <Snackbar
        open={openalert_num}
        autoHideDuration={5000}
        onClose={handleClosewar_num}
      >
        <Alert
          onClose={handleClosewar_num}
          severity="warning"
          sx={{ width: "100%" }}
        >
          Number Repeation is not allowed !
        </Alert>
      </Snackbar>
    </>
  );
}

export default Game2;
