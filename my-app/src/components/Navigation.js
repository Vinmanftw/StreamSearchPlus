import React,{useState} from 'react'
import FetchAndRender from './FetchAndRender'
function Navigation({curProvider, type}) {
    
    let curIndex = 1
    
    function handleClick(e){
        if (e.target.id === 'next') {
            curIndex++
            console.log("right")
            
        }else if (curIndex>1 && e.target.id === 'back') {
            curIndex--
            console.log("left")
            //fetchAndRender
            //provider
            //type (default to movies)
            //page: curIndex
        }
        <FetchAndRender provider={curProvider} type={type} curIndex={curIndex}/>
    }
    function handleSubmit(e) {
        e.preventDefault()
        const value = e.target.value
        console.log(value)
        curIndex = 1;
        <FetchAndRender provider={curProvider} type={type} curIndex={curIndex} keyword={value}/>
    }
    return (
        <div>
            <div className="Buttons">
                <button id="back" onClick={handleClick}>Back</button>
                <button id="next" onClick={handleClick}>Next</button>
            </div>
            <div>
                <button id="beginning" onClick={()=>(curIndex = 1)}>Beginning</button>
                <form id="search-form" onSubmit={handleSubmit}>
                    <input id="search-input" placeholder="Search by Name/Keyword"/>
                </form>
                {/* input page form that requires to be a number and sets curIndex to it */}
            </div>
        </div>
    )
}

export default Navigation
