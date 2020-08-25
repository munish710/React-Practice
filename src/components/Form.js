import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
             userName:"",
             skill:'react'
        }
    }
    userHandler=(event)=>{
        this.setState({
            userName:event.target.value
        })
    }

    skillHandler=(event)=>{
        this.setState({
            skill:event.target.value
        })
    }

    submithandler=(event)=>{
        alert(`${this.state.userName} ${this.state.skill}`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submithandler}>
                    <label>Name</label>
                    <input type='text' value={this.state.userName} onChange={this.userHandler}></input>
                    <label>Skill</label>
                    <select value={this.state.skill} onChange={this.skillHandler}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">vue</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
