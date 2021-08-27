import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink exact to="/" className="home-link">
        StreamSearch+
      </NavLink>
      <nav className="NavBar-NavLinks">
        <NavLink to="./">
          <button id="netflix" onClick={()=>{console.log("Never")}}>
            <img
              src="https://www.justwatch.com/images/icon/207360008/s100"
              alt="Netflix"
            />
          </button>
        </NavLink>
        <NavLink to="./Hulu">
          <button id="hulu" onClick={()=>{console.log("gonna")}}>
            <img
              src="https://play-lh.googleusercontent.com/4whGAVjZGrrlNxzheKAfBXrxggtyAb4euWLeQI8fDfVfdnFEZjE0DZTJ8DKoh64pqcIa"
              alt="Hulu"
            />
          </button>
        </NavLink>
        <NavLink to="./Prime">
          <button id="prime" onClick={()=>{console.log("give")}}>
            <img
              src="https://www.justwatch.com/images/icon/52449539/s100"
              alt="Prime Video"
            />
          </button>
        </NavLink>
        <NavLink to="./Peacock">
          <button id="peacock" onClick={()=>{console.log("you")}}>
            <img
              src="https://images.justwatch.com/icon/194173870/s100"
              alt="Peacock"
            />
          </button>
        </NavLink>
        <NavLink to="./Paramount+">
          <button id="paramount" onClick={()=>{console.log("up")}}>
            <img
              src="https://images.justwatch.com/icon/242706661/s100"
              alt="Paramount +"
            />
          </button>
        </NavLink>
        <NavLink to="./AppleTV+">
          <button id="appleTV" onClick={()=>{console.log("never")}}>
            <img
              src="https://www.justwatch.com/images/icon/152862153/s100"
              alt="Apple TV+"
            />
          </button>
        </NavLink>
        <NavLink to="./Starz">
          <button id="starz" onClick={()=>{console.log("gonna")}}>
            <img
              src="https://images.justwatch.com/icon/902247/s100"
              alt="Starz"
            />
          </button>
        </NavLink>
        <NavLink to="./Showtime">
          <button id="showtime" onClick={()=>{console.log("let")}}>
            <img
              src="https://images.justwatch.com/icon/677041/s100"
              alt="Showtime"
            />
          </button>
        </NavLink>
        <NavLink to="./HBOMax">
          <button id="hbomax" onClick={()=>{console.log("you")}}>
            <img
              src="https://play-lh.googleusercontent.com/GmIOtlRHzTffK3WSyNrz4NNrWFh_yUuhQb9UHXztk0ZxeeFzAUD52b9YVTGh7nsdJ8c"
              alt="HBOMAX"
            />
          </button>
        </NavLink>
        <NavLink to="./Disney+">
          <button id="disney" onClick={()=>{console.log("down")}}>
            <img
              src="https://www.justwatch.com/images/icon/147638351/s100"
              alt="Disney+"
            />
          </button>
        </NavLink>
      </nav>
    </nav>
  );
}

export default NavBar;
