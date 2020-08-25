import React from 'react'
import ReactDOM from 'react-dom'   

function PortalDemo() {
   
    return ReactDOM.createPortal( <div>
        Hello World, this is a Portal Component!
    </div>,document.getElementById('portal-root'))
}

export default PortalDemo
