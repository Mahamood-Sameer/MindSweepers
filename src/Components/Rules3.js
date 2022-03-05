import React from "react";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";

function Rule3() {
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
            Each player should select an unselected cell, adjacent to the latest
            cell selected by the opponent, and can use a superpower once. The
            player with the max sum wins
          </p>
          <h3>Rules :</h3>
          <ul className="rules_box">
            <li>
              The game would be played in turns with the first player selecting
              a cell adjacent to 1.
            </li>
            <br />
            <li>
              In the subsequent turns, each player should mark an unselected
              cell, adjacent to the cell just now selected by the opponent.
            </li>
            <br />
            <li>
              To mark the cell, the player would have to say : “ Game master
              mark cell x “, where x is the adjacent cell.
            </li>
            <br />
            <li>
              Each player would be given a superpower- they can rotate any of
              the squares by y elements clockwise. They can use this superpower
              only once.
            </li>
            <br />
            <li>
              The game finishes when the player is unable to make a move. The
              one with the greater sum wins. In case of a tie, the player who
              selected the largest number will win.
            </li>
          </ul>
          <br />
          <center>
            {" "}
            <div className="Playbtn">
              {" "}
              <Link to="/game3" className="playLink">
                Play{" "}
              </Link>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Rule3;
