import React, { Component } from 'react'
import UserContext,{UserConsumer} from './userContext'


 class ComponentF extends Component {
    render() {
        return (
            /*<UserConsumer>
            { userName=>{
                return <div>Hello Everyone from {userName}</div>
            }

            }
            </UserConsumer>  or */
            <div>{this.context} is my Name</div>
            //Drawbacks: Only works with CC and can use only 1 context per component.
        )
    }
}

ComponentF.contextType=UserContext

export default ComponentF
