import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import Display from './Display'
function Disney() {
    const [curType, setCurType] = useState("movies")
    function handleType(){
        curType === "movies" ? setCurType("series") : setCurType("movies")
    }
    return (
        <div>
            <h1>Disney+</h1>
            <NavLink to="/">Home</NavLink>
            <div className="types">
                <button id="typebutton" onClick={handleType}>{curType}</button>
            </div>
            <Display curProvider={"disney"} type={curType}/>
        </div>
    )
}

export default Disney
