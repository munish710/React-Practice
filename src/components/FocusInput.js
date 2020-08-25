import React, { Component } from 'react'
import Input from './Input'
//This example shows us , how we can use refs to acces even components and not just HTML
//Here we are accessing focusInput() method of Input component.
export class FocusInput extends Component {

    constructor(props) {
        super(props)
        this.compRef=React.createRef()
    }
    clickHandler=()=>{
        this.compRef.current.focusInput()
    }
  

    render() {
        return (
            <div>
                <Input ref={this.compRef}/>
                <button onClick={this.clickHandler}>Focus input</button>
            </div>
        )
    }
}

export default FocusInput
