import React, { Component } from 'react'
import ComponentE from './ComponentE'
//C->E->F USing contextAPI
export class ComponentC extends Component {
    render() {
        return (
            <div>
                <ComponentE/>
            </div>
        )
    }
}

export default ComponentC
