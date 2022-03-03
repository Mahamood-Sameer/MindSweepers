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
            <li>The first player starts from any circle and fills 1.</li>
            <br />
            <li>
              Then Player2 fills 1, Player1 then fills 2 and again Player2 fills
              2 and so on.
            </li>
            <br />
            <li>The game continues till 1 circle is left.</li>
            <br />
            <li>
              And at last the neighboring layer circles of the blank circle is
              bombed.That means the players will be losing some numbers.
            </li>
            <br />
            <li>
              And next if we calculate the sum of each player numbers, the one
              with maximum sum is declared as a winner
            </li>
            <br />
            <li>
              If the sum is same then the next layer will be bombed and
              again if we calculate the sum , the one with maximum sum is
              declared as a winner
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
