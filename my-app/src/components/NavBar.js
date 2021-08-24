import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            
            <nav className="NavBar-NavLinks">
            <NavLink exact to="/"><button id="home">Home</button></NavLink>
                <NavLink to="./Netflix"><button id="netflix">Netflix</button></NavLink>
                <NavLink to="./Hulu"><button id="hulu">Hulu</button></NavLink>            
                <NavLink to="./Prime"><button id="prime">Amazon Prime Video</button></NavLink>
                <NavLink to="./Peacock"><button id="peacock">Peacock</button></NavLink>
                <NavLink to="./Paramount+"><button id="paramount">Paramount+</button></NavLink>
                <NavLink to="./AppleTV+"><button id="appleTV">AppleTV</button></NavLink>
                <NavLink to="./Starz"><button id="starz">Starz</button></NavLink>
                <NavLink to="./Showtime"><button id="showtime">Showtime</button></NavLink>
                <NavLink to="./HBOMax"><button id="hbomax">HBO Max</button></NavLink>
            </nav>
        </nav>
    );
}

export default NavBar;