import React from "react";
import "./Home.css";
import image from "../Images/Screenshot (98).png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home_container">
      <div className="home_container_left">
        <img src={image} alt="" className="image_game image_rules image_home" />
      </div>
      <div className="home__games_right">
        <Link to="/rules2" className="links_to_games">Rhombus Game (Akshay)</Link>
        <br />
        <br />
        <Link to="/rules" className="links_to_games">Special Matrix (Varandeep)</Link>
      </div>
    </div>
  );
}

export default Home;
