import React, { Component } from 'react'
import FRInput from './FRInput'
/*For anyone who is confused between the previous video and this, let me break it down for you.
'ref 'in React  is basically used to access HTML nodes, in the previous we learned that refs can also be used to access components in React, in a similar way we did the HTML element. 
In this video we referenced the Child Component as well, but then we used React.forwardRef() to forward the reference from the child component to the input element inside the component.
Thus we were directly able to access the focus() method of <input> tag directly in our Parent Component via this.inputRef.current.focus(). 
if we would'nt have forwarded the ref  we could'nt have accessed it directly via  the current object */
export class FRParent extends Component {

    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
    }

    clickhandler=()=>{
        this.inputRef.current.focus()
    }

    render() {
        return (
            <div>
            <FRInput ref={this.inputRef}/> 
            <button onClick={this.clickhandler}>Focus Input</button>   
            </div>
        )
    }
}

export default FRParent
