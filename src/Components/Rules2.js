import React from "react";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";
import "./Rules.css";

function Rules2() {
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
          <br />
          <ul className="rules_box">
            <li>
              Team 1 starts from any circle and fills ‘1’ and adds 1 to their
              score.
            </li>
            <br />
            <li>
              To mark a circle the team would have to say “Game master mark
              circle (x,y) with Z“ where (x,y) is the coordinate of the circle
              and Z is the number to be marked.
            </li>
            <br />
            <li>
              Next Team 2 can place ‘1’ in any unmarked circle and add 1 to
              their score.
            </li>
            <br />
            <li>
              Next Team 1 places ‘2’ in any unmarked circle and adds 2 to their
              score, then Team 2 places ‘2’ and this continues
            </li>
            <br />
            <li>The game stops when we have 1 circle left.</li>
            <br />
            <li>
              The numbers on the neighboring circles to the last remaining
              circle are reduced from the score of the respective teams.
            </li>
            <br />
            <li>The team with the maximum score wins the game.</li>
            <br />
            <li>
              If the score of both the teams is equal, then the numbers on the
              next neighboring circles are reduced from the respective team’s
              score, and the process continues till we have a clear winner.
            </li>
          </ul>
          <br />
          <center>
            {" "}
            <div className="Playbtn">
              {" "}
              <Link to="/game1" className="playLink">
                Play{" "}
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Rules2;
