import React from 'react'
import {Link} from 'react-router-dom'


function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <Link to="./Netflix">Netflix</Link>
            <Link to="./Hulu">Hulu</Link>            
            <Link to="./Prime">Amazon Prime Video</Link>
            <Link to="./Peacock">Peacock</Link>
            <Link to="./Paramount">Paramount+</Link>
            <Link to="./Disney">Disney+</Link>
            <Link to="./AppleTV">AppleTV</Link>
            <Link to="./Starz">Starz</Link>
            <Link to="./Showtime">Showtime</Link>
            <Link to="./HBOMax">HBO Max</Link>
        </div>
    )
}

export default Home
