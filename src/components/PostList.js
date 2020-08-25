import React, { Component } from 'react'
import axios from 'axios'
//GET requests using Axios
export class PostList extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[],
            errorMessage:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').
        then( response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        }).catch( error=>{
            console.log(error)
            this.setState({
                errorMessage:'Error Retrieving Data!'
            })
        })
    }

    render() {
        const {posts,errorMessage}=this.state
        return (
            <div>
                PostsList
                {posts && posts.length?
                    posts.map(post=>{
                    return <div key={post.id}>{post.title}</div>}):null
                }

                <div>{errorMessage?errorMessage:null}</div>
            </div>

        )
    }
}

export default PostList
