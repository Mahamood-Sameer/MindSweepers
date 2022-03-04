import React, { useState } from "react";
import "./Game3.css";
import image from "../Images/Screenshot (98).png";
import image_2 from "../Images/Screenshot (112).png";
import { Avatar } from "@mui/material";
import Input from "@mui/material/Input";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ariaLabel = { "aria-label": "description" };

function Game3() {
  // Hash
  const [hash, setHash] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0,
  ]);
  // Prev row col
  const [prev, setPrev] = useState([-1, -1]);
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

  //Greening all the places
  const Greening = (row, col, color) => {
    //row-left
    console.log(row, col);
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
    document.getElementById(`rows_${row}_cols_${col}`).style.backgroundColor =
      color;
    document.getElementById(`rows_${row}_cols_${col}`).style.color = "white";
    Greening(row, col, "green");

    setplayer((e) => (e + 1) % 2);
  };

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
                    className={`board_boxes board_boxes_game3`}
                    id={`rows_${i}_cols_${j}`}
                    value={`${values[i][j]}`}
                    onFocus={() => {
                      CheckFunc(i, j);
                    }}
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
        <div className="table_cover">

        </div>
        <div className="table_cover_2">

        </div>
        <div className="table_cover_3">

        </div>
      </div>
    </div>
  );
}

export default Game3;
