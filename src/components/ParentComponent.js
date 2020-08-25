import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state={
            parent:"Parent Panel!"
        }
        this.greetParent=this.greetParent.bind(this);
    }

    greetParent(childName){
        alert(`Hello to ${this.state.parent} from ${childName}`)
    }

    render() {
        return (
            <div>
                <ChildComponent clickHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
