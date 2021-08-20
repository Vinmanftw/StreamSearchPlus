import React from 'react'
import Child1 from "./Child1";
import Child2 from "./Child2";

function Parent(props) {
    return (
        <div>
            <Child1/>
            <Child2/>
        </div>
    )
}

export default Parent
