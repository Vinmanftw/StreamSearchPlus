import React from 'react'
import {NavLink} from 'react-router-dom'

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                
                <NavLink to="./Netflix">Netflix</NavLink><br/>
                <NavLink to="./Hulu">Hulu</NavLink><br/>            
                <NavLink to="./Prime">Amazon Prime Video</NavLink><br/>
                <NavLink to="./Peacock">Peacock</NavLink><br/>
                <NavLink to="./Paramount+">Paramount+</NavLink><br/>
                <NavLink to="./AppleTV+">AppleTV</NavLink><br/>
                <NavLink to="./Starz">Starz</NavLink><br/>
                <NavLink to="./Showtime">Showtime</NavLink><br/>
                <NavLink to="./HBOMax">HBO Max</NavLink><br/>
            </nav>
        </div>
    )
}

export default Home
