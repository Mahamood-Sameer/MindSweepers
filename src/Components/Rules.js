import React from "react";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
  return (
    <div className="game_rules_container">
      <div className="header__rules_left">
        <img src={image} alt="" className="image_game image_rules" />
      </div>
      <div className="header__rules_right">
        <center>
          <h1>Rules for the game</h1>
        </center>
        <div className="header_rules_container">
          <h3>Overview :</h3>
          <br />
          <p>
            There is a special grid that holds the property that the gcd of any
            two elements along any diagonal is greater than 1.
          </p>
          <br />
          <h3>Rules :</h3>
          <br />
          <ul className="rules_box">
            <li>
              Numbers only between 1 to 40 can be inserted into the grid
              (10x10).
            </li>
            <br />
            <li>
              In one turn, the player can insert any not used number p ([1,40])
              into the cell (i,j) only if it’s gcd with all the two diagonal
              elements (here diagonals passing through the cell (i,j) is
              referred) is greater than 1.
            </li>
            <br />
            <li>
              In the end, if some player in his turn cannot insert any valid number
              into the grid, he loses.
            </li>
          </ul>
          <br />
          <center>
            {" "}
            <div className="Playbtn">
              {" "}
              <Link to="/game" className="playLink">Play </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Rules;
