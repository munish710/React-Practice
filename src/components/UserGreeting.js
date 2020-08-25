import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
        this.state = {
             isLoggedIn:false
        }
    }

    render() {
        /*Method 1 if/else
        if(this.state.isLoggedIn){
            return (
                <div>
                    Welcome Munish!
                </div>
            )
        }else{
            return (
                <div>
                    Welcome Guest!
                </div>
            )
        } */
       /*Method 2 element variables
        let message
        if(this.state.isLoggedIn){
            message=<div>Welcome Munish!</div>
        }else{
            message=<div>Welcome Stranger!</div>
        }
        return message */
        /*Method-3 Ternary conditional operator
        return (this.state.isLoggedIn?
            <div>
                    Welcome Munish!
                </div>:
            <div>
                Welcome Guest!
            </div>
        ) */
        
        //Method-4 Short circuit| Display something or nothing
        return this.state.isLoggedIn && <div>Welcome Munish!</div>
        
    }
}

export default UserGreeting
