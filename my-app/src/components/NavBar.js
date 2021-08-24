import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="./Netflix">Netflix</NavLink>
            <NavLink to="./Hulu">Hulu</NavLink>            
            <NavLink to="./Prime">Amazon Prime Video</NavLink>
            <NavLink to="./Peacock">Peacock</NavLink>
            <NavLink to="./Paramount+">Paramount+</NavLink>
            <NavLink to="./AppleTV+">AppleTV</NavLink>
            <NavLink to="./Starz">Starz</NavLink>
            <NavLink to="./Showtime">Showtime</NavLink>
            <NavLink to="./HBOMax">HBO Max</NavLink>
        </nav>
    );
}

export default NavBar;