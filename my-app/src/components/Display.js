import React from 'react'
import Navigation from './Navigation'
import FetchAndRender from './FetchAndRender'
function Display({curProvider, type}) {
    return (
        <div>
            <Navigation curProvider={curProvider} type={type}/>
            <FetchAndRender curProvider={curProvider} type={type} curIndex={1}/>
        </div>
    )
}

export default Display
