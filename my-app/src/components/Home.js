import React from 'react'
import {NavLink} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <nav className="Home-NavLinks">
                <NavLink to="./Netflix"><button id="netflix">Netflix</button></NavLink><br/>
                <NavLink to="./Hulu"><button id="hulu">Hulu</button></NavLink><br/>            
                <NavLink to="./Prime"><button id="prime">Amazon Prime Video</button></NavLink><br/>
                <NavLink to="./Peacock"><button id="peacock">Peacock</button></NavLink><br/>
                <NavLink to="./Paramount+"><button id="paramount">Paramount+</button></NavLink><br/>
                <NavLink to="./AppleTV+"><button id="appleTV">AppleTV</button></NavLink><br/>
                <NavLink to="./Starz"><button id="starz">Starz</button></NavLink><br/>
                <NavLink to="./Showtime"><button id="showtime">Showtime</button></NavLink><br/>
                <NavLink to="./HBOMax"><button id="hbomax">HBO Max</button></NavLink><br/>
            </nav>
        </div>
    )
}

export default Home
