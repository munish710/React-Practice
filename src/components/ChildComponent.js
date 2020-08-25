import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={()=>props.clickHandler("Munish")}>Click!</button>
        </div>
    )
}

export default  ChildComponent