import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ handleOnClick }) {
  return (
    <nav>
      <NavLink exact to="/" className="home-link">
        StreamSearch+
      </NavLink>
      <nav className="NavBar-NavLinks">
        <NavLink to="./Netflix">
          <button
            id="netflix"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("black", "red");
            }}
          >
            <img
              src="https://www.justwatch.com/images/icon/207360008/s100"
              alt="Netflix"
            />
          </button>
        </NavLink>
        <NavLink to="./Hulu">
          <button
            id="hulu"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("green", "white");
            }}
          >
            <img
              src="https://www.justwatch.com/images/icon/116305230/s100"
              alt="Hulu"
            />
          </button>
        </NavLink>
        <NavLink to="./Prime">
          <button
            id="prime"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("white", "blue");
            }}
          >
            <img
              src="https://www.justwatch.com/images/icon/52449539/s100"
              alt="Prime Video"
            />
          </button>
        </NavLink>
        <NavLink to="./Peacock">
          <button
            id="peacock"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("gray", "white");
            }}
          >
            <img
              src="https://images.justwatch.com/icon/194173870/s100"
              alt="Peacock"
            />
          </button>
        </NavLink>
        <NavLink to="./Paramount+">
          <button
            id="paramount"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("blue", "white");
            }}
          >
            <img
              src="https://images.justwatch.com/icon/242706661/s100"
              alt="Paramount +"
            />
          </button>
        </NavLink>
        <NavLink to="./AppleTV+">
          <button
            id="appleTV"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("gray", "white");
            }}
          >
            <img
              src="https://www.justwatch.com/images/icon/152862153/s100"
              alt="Apple TV+"
            />
          </button>
        </NavLink>
        <NavLink to="./Starz">
          <button
            id="starz"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("grey", "white");
            }}
          >
            <img
              src="https://images.justwatch.com/icon/902247/s100"
              alt="Starz"
            />
          </button>
        </NavLink>
        <NavLink to="./Showtime">
          <button
            id="showtime"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("red", "white");
            }}
          >
            <img
              src="https://images.justwatch.com/icon/677041/s100"
              alt="Showtime"
            />
          </button>
        </NavLink>
        <NavLink to="./HBOMax">
          <button
            id="hbomax"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("purple", "white");
            }}
          >
            <img
              src="https://play-lh.googleusercontent.com/GmIOtlRHzTffK3WSyNrz4NNrWFh_yUuhQb9UHXztk0ZxeeFzAUD52b9YVTGh7nsdJ8c"
              alt="HBOMAX"
            />
          </button>
        </NavLink>
        <NavLink to="./Disney+">
          <button
            id="disney"
            onClick={(e) => {
              e.stopPropagation();
              handleOnClick("blue", "white");
            }}
          >
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
