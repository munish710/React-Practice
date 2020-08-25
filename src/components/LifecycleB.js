import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.state = {
             name:"Munish"
        }
        console.log("LifecylceB constructor")
    }
    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleB getDervideStateFromProps")
        return null;
    }
    shouldComponentUpdate(){
        console.log("Lifecycle B should component update")
        return true;
    }
 
    getSnapshotBeforeUpdate(prevProps,prevsate){
        console.log("LifecycleB Snapshot")
        return null
    }
    componentDidUpdate(){
        console.log("Lifecycle B componet did update")
    }
    
    componentDidMount(){
        console.log("LifecycleB componentDidMount")
    }
    render() {
        console.log("LifecycleB render")
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB
