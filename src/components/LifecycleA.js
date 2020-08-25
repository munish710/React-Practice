import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:"Munish"
        }
        console.log("LifecylceA constructor")
    }

    clickHandler=()=>{
        this.setState({
            name:"Batman!"
        })
    }
    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleA getDervideStateFromProps")
        return null;
    }

    shouldComponentUpdate(){
        console.log("Lifecycle A should component update")
        return true;
    }
   /* componentDidMount(){
        console.log("Lifecycle A componentDidMount")
    } */
    getSnapshotBeforeUpdate(prevProps,prevsate){
        console.log("LifecycleA Snapshot")
        return null
    }

    componentDidUpdate(){
        console.log("Lifecycle A componet did update")
    }
    render() {
        console.log("LifecycleA render")
        return (
            <div>
                LifecycleA
                <LifecycleB/>
                <button onClick={this.clickHandler}>Change State</button>
            </div>
        )
    }
}

export default LifecycleA
