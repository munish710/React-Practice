import React, { Component } from 'react'
import axios from 'axios'
//HTTP POST using axios
class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId:'',
             title:'',
             body:''
        }
    }

    changeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitForm=e=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((result)=>{
                console.log(result)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    
    render() {
        const {userId,title,body}=this.state
        return (
            <div>
                <form onSubmit={this.submitForm}>
                <input type="text" name="userId" value={userId} onChange={this.changeHandler}></input>
                <input type="text" name="title" value={title} onChange={this.changeHandler}></input>
                <input type="text" name="body" value={body} onChange={this.changeHandler}></input>
                <button type="submit" >Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm
