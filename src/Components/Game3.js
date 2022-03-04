import React, { useEffect, useState } from "react";
import "./Game3.css";
import image from "../Images/Screenshot (98).png";
import { Avatar } from "@mui/material";
import Input from "@mui/material/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { green } from "@mui/material/colors";

const ariaLabel = { "aria-label": "description" };

function Game3() {
  //At present row col
  const [pres, setPres] = useState(null);
  // Hash
  const [hash, setHash] = useState([
    0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ]);
  const [hash_color, setHash_color] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  // Prev row col
  const [prev, setPrev] = useState([3, 3]);
  const board = [
    [0, 1, 1, 0, 1, 1, 0],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 1, 1, 0, 1, 1, 0],
  ];

  //   Value of boxes

  const [values, setValues] = useState([
    [15, "", "", 17, "", "", 8],
    ["", 4, "", 2, "", 11, ""],
    ["", "", 18, 13, 7, "", ""],
    ["", "", "", 1, "", "", ""],
    ["", "", 6, 14, 19, "", ""],
    ["", 12, "", 3, "", 5, ""],
    [9, "", "", 16, "", "", 10],
  ]);

  //   Player
  const [player1, setplayer1] = useState("");
  const [player2, setplayer2] = useState("");
  const [player, setplayer] = useState(1);

  //   Players total
  const [player1_total, setplayer1_total] = useState(0);
  const [player2_total, setplayer2_total] = useState(0);

  // Rotation
  const [radius, setRadius] = useState(null);
  const [degrees, setdegrees] = useState(null);

  const ROTATIONCALL = () => {
    console.log(pres);
    for (var i = 0; i <= 6; i++) {
      for (var j = 0; j <= 6; j++) {
        if (values[i][j] === pres) {
          console.log(i, j);
          Greening(i, j, "white");
          break;
        }
      }
    }
    var number = degrees;
    for (var i = 0; i < number; i++) {
      ROTATE();
    }
    console.log(pres);
    for (var i = 0; i <= 6; i++) {
      for (var j = 0; j <= 6; j++) {
        if (values[i][j] === pres) {
          console.log(i, j);
          // Greening(i,j,"green");
          CheckAgain(i, j);
          break;
        }
      }
    }
  };

  const ROTATE = () => {
    var row = 3 - radius;
    var col = 3 - radius + 1;
    var prev_num = values[row][col - 1];
    while (col < 7) {
      if (values[row][col] === "") {
        col++;
      } else {
        var temp = values[row][col];
        let copy = [...values];
        copy[row][col] = prev_num;
        setValues(copy);
        var color = hash_color[prev_num];
        if (color === "" || color === "green") color = "white";
        prev_num = temp;
        document.getElementById(
          `rows_${row}_cols_${col}`
        ).style.backgroundColor = color;
        if (color === "white") {
          document.getElementById(`rows_${row}_cols_${col}`).style.color =
            "black";
        } else {
          document.getElementById(`rows_${row}_cols_${col}`).style.color =
            "white";
        }
        col++;
      }
    }

    row = parseInt(radius) + 3;
    col = parseInt(6);
    while (col >= 0) {
      if (values[row][col] === "") {
        col--;
      } else {
        var temp = values[row][col];
        let copy = [...values];
        copy[row][col] = prev_num;
        setValues(copy);
        var color = hash_color[prev_num];
        if (color === "" || color === "green") color = "white";
        prev_num = temp;
        document.getElementById(
          `rows_${row}_cols_${col}`
        ).style.backgroundColor = color;
        if (color === "white") {
          document.getElementById(`rows_${row}_cols_${col}`).style.color =
            "black";
        } else {
          document.getElementById(`rows_${row}_cols_${col}`).style.color =
            "white";
        }
        col--;
      }
    }
    row = 3 - radius;
    col = 3 - radius;
    let copy = [...values];
    copy[row][col] = prev_num;
    setValues(copy);
    var color = hash_color[prev_num];
    if (color === "" || color === "green") color = "white";
    prev_num = temp;
    document.getElementById(`rows_${row}_cols_${col}`).style.backgroundColor =
      color;
    if (color === "white") {
      document.getElementById(`rows_${row}_cols_${col}`).style.color = "black";
    } else {
      document.getElementById(`rows_${row}_cols_${col}`).style.color = "white";
    }
    col--;
    setRadius("");
    setdegrees("");
  };

  //Greening all the places
  const Greening = (row, col, color) => {
    //row-left
    var i = row,
      j = col - 1;
    while (true) {
      if (j < 0) {
        break;
      } else {
        if (values[i][j] === "") {
          j--;
        } else {
          if (hash[values[i][j]]) {
            break;
          } else {
            document.getElementById(
              `rows_${i}_cols_${j}`
            ).style.backgroundColor = color;
            break;
          }
        }
      }
    }

    //row-right
    i = row;
    j = col + 1;
    while (true) {
      if (j > 6) {
        break;
      } else {
        if (values[i][j] === "") {
          j++;
        } else {
          if (hash[values[i][j]]) {
            break;
          } else {
            document.getElementById(
              `rows_${i}_cols_${j}`
            ).style.backgroundColor = color;
            break;
          }
        }
      }
    }

    //col-up
    i = row - 1;
    j = col;
    while (true) {
      if (i < 0) {
        break;
      } else {
        if (values[i][j] === "") {
          i--;
        } else {
          if (hash[values[i][j]]) {
            break;
          } else {
            document.getElementById(
              `rows_${i}_cols_${j}`
            ).style.backgroundColor = color;
            break;
          }
        }
      }
    }

    //col-down
    i = row + 1;
    j = col;
    while (true) {
      if (i > 6) {
        break;
      } else {
        if (values[i][j] === "") {
          i++;
        } else {
          if (hash[values[i][j]]) {
            break;
          } else {
            document.getElementById(
              `rows_${i}_cols_${j}`
            ).style.backgroundColor = color;
            break;
          }
        }
      }
    }

    //Diagonal
    if (row === col) {
      if (
        document.getElementById(`rows_${row + 1}_cols_${col + 1}`) &&
        !hash[values[row + 1][col + 1]]
      )
        document.getElementById(
          `rows_${row + 1}_cols_${col + 1}`
        ).style.backgroundColor = color;

      if (
        document.getElementById(`rows_${row - 1}_cols_${col - 1}`) &&
        !hash[values[row - 1][col - 1]]
      )
        document.getElementById(
          `rows_${row - 1}_cols_${col - 1}`
        ).style.backgroundColor = color;
    }
    if (row + col === 6) {
      if (
        document.getElementById(`rows_${row - 1}_cols_${col + 1}`) &&
        !hash[values[row - 1][col + 1]]
      )
        document.getElementById(
          `rows_${row - 1}_cols_${col + 1}`
        ).style.backgroundColor = color;

      if (
        document.getElementById(`rows_${row + 1}_cols_${col - 1}`) &&
        !hash[values[row + 1][col - 1]]
      )
        document.getElementById(
          `rows_${row + 1}_cols_${col - 1}`
        ).style.backgroundColor = color;
    }
  };

  //Prev_row_col clearing func

  const ClearFunc = () => {
    if (prev[0] === -1 && prev[1] === -1) {
    } else {
      var row = prev[0];
      var col = prev[1];
      Greening(row, col, "white");
    }
  };

  //Checking again
  const CheckAgain = (row, col) => {
    ClearFunc();
    let clear = [...prev];
    clear[0] = row;
    clear[1] = col;
    setPrev(clear);
    let copy = [...hash];
    copy[values[row][col]] = 1;
    setHash(copy);
    var color=hash_color[values[row][col]]
    document.getElementById(`rows_${row}_cols_${col}`).style.backgroundColor =
      color;
    document.getElementById(`rows_${row}_cols_${col}`).style.color = "white";
    Greening(row, col, "green");
    setPres(values[row][col]);
  };

  //   Main function

  const CheckFunc = (row, col) => {
    ClearFunc();
    let clear = [...prev];
    clear[0] = row;
    clear[1] = col;
    setPrev(clear);
    let copy = [...hash];
    copy[values[row][col]] = 1;
    setHash(copy);
    var color;
    if (player === 1) {
      color = "#cc2dcc";
      setplayer1_total((e) => e + values[row][col]);
    } else {
      color = "orange";
      setplayer2_total((e) => e + values[row][col]);
    }
    copy = [...hash_color];
    copy[values[row][col]] = color;
    setHash_color(copy);
    document.getElementById(`rows_${row}_cols_${col}`).style.backgroundColor =
      color;
    document.getElementById(`rows_${row}_cols_${col}`).style.color = "white";
    Greening(row, col, "green");
    setPres(values[row][col]);
    setplayer((e) => (e + 1) % 2);
  };

  useEffect(() => {
    if (prev[0] === 3 && prev[1] === 3) {
      Greening(3, 3, "green");
    }
  }, []);

  return (
    <div className="game3_container">
      <div className="left_side_board">
        <div className="left_side_image_container">
          <img src={image} alt="" className="image_game" />
        </div>

        <div className="left_side_player_container_game2">
          <div className="player_info_box">
            {player === 1 ? <ArrowForwardIcon className="player_turn" /> : null}

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
            {player === 0 ? <ArrowForwardIcon className="player_turn" /> : null}
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
        </div>
        <div className="rotation_btns">
          <input
            type="number"
            placeholder="Radius"
            value={radius}
            onChange={(e) => {
              setRadius(e.target.value);
            }}
          />
          <br />
          <input
            type="number"
            placeholder="Units"
            value={degrees}
            onChange={(e) => {
              setdegrees(e.target.value);
            }}
          />
          <br />
          <button className="submit_btn" onClick={ROTATIONCALL}>
            Rotate
          </button>
        </div>
      </div>
      <div className="game_board">
        {board.map((row, i) => (
          <div className={`rows_${i}`}>
            {row.map((col, j) => (
              <>
                {board[i][j] === 0 ? (
                  <input
                    autoComplete="off"
                    type="text"
                    className={`board_boxes board_boxes_game3 row_sepcial_${i}_col_${i}`}
                    id={`rows_${i}_cols_${j}`}
                    value={`${values[i][j]}`}
                    onFocus={() => {
                      CheckFunc(i, j);
                    }}
                    disabled={i === 3 && j === 3 ? true : false}
                    readOnly={true}
                  />
                ) : (
                  <>
                    <input
                      autoComplete="off"
                      type="text"
                      className={`board_boxes board_boxes_game3 disable_boxes`}
                      id={`rows_${i}_cols_${j}`}
                      value={`${values[i][j]}`}
                      disabled={true}
                    />
                  </>
                )}
              </>
            ))}
          </div>
        ))}
        <div className="table_cover"></div>
        <div className="table_cover_2"></div>
        <div className="table_cover_3"></div>
        <div className="table_cover_4"></div>
        <div className="table_cover_5"></div>
        <div className="table_cover_6"></div>
      </div>
    </div>
  );
}

export default Game3;
