import React from "react";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";
import "./Rules.css";

function Rules() {
  return (
    <div className="game_rules_container">
      <div className="header__rules_left">
        <img src={image} alt="" className="image_rules" />
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
            <li>The game would be played in turns.</li>
            <br />
            <li>
              In its turn, the team can insert any number ‘p’ from 2-40 in any
              cell (i,j), which satisfies the following conditions:
            </li>
            <br />
            <li  className="rules_sub">The number should not have been used before by any team.</li>
            <br />
            <li className="rules_sub">
              Any of the diagonals passing through (i,j) should not have a
              number whose gcd with p is equal to 1.
            </li>
            <br />
            <li>
              To put a number, the team must say- “Game Master mark ___ at ( _ ,
              _ )”.
            </li>
          </ul>
          <br />
          <center>
            {" "}
            <div className="Playbtn">
              {" "}
              <Link to="/game2" className="playLink">
                Play{" "}
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Rules;
