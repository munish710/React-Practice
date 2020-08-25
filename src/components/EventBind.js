import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
        this.state = {
             message: "Welcome!"
        }
        //this.clickhandler=this.clickhandler.bind(this); for 3rd method
    }
    // clickhandler(){
    //     this.setState(
    //         {
    //             message:"Goodbye :("
    //         }
    //     )
    // } for first three methods

    //for 4th method.latest
     clickhandler=()=>{
        this.setState(
                    {
                        message:"Goodbye dude"
                    }
        )
    }


    render() {
        const {message}=this.state;
        return (
            <div>
                <h1>{message}</h1>
                {/*<button onClick={this.clickhandler.bind(this)}>Click</button>*/}
                {/*<button onClick={()=>this.clickhandler()}>Click</button>*/}
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
