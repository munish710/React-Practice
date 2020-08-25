import React, { Component } from 'react'

export class RegularComp extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        console.log("Reg Componetn")
        return (
            <div>
                Regular Component! {this.props.name}
            </div>
        )
    }
}

export default RegularComp
