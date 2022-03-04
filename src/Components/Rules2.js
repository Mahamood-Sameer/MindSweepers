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
            <li>Player 1 starts from any circle and fills ‘1’</li>
            <br />
            <li>Next Player 2 can place ‘1’ in any unmarked circle</li>
            <br />
            <li>
              Next Player 1 places ‘2’ in any unmarked circle, then Player 2
              places ‘2’ and this continues
            </li>
            <br />
            <li>
              Then the sum of the remaining circles is calculated. The player
              with the maximum sum wins the game.
            </li>
            <br />
            <li>
              If the sum is equal, the neighboring circles of the now bombed
              circles are also bombed, and the process continues till we have a
              clear winner.
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
