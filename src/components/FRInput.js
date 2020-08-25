import React from 'react'

//Forward the ref to Child component from parent to the input element.
const FRInput=React.forwardRef((props,ref)=> {
    return (
        <div>
            <label>Input field for forward ref
            </label>
           <input type="text" ref={ref}></input> 
        </div>
    )
}) 
export default FRInput