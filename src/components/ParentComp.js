import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'

export class ParentComp extends Component {

    constructor(props) {
        super(props)
        this.state = {
             namr:"Munish"
        }
    }
    //Change the state every 2 seconds so normal components re-rneder not Pure Components.
    componentDidMount(){
        setInterval(()=>{
            this.setState(
                {
                    name:"Munish"
                }
            )
        })
    }
    render() {
        console.log("Parent Componetn")
        return (
            <div>
                
               Parent Component!
               <PureComp name={this.state.name}/>
               <RegularComp name={this.state.name}/> 
            </div>
        )
    }
}

export default ParentComp
