import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        console.log("Pure Componetn")
        return (
            <div>
                Pure Component {this.props.name}
            </div>
        )
    }
}
