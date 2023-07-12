import React, { Component } from 'react'

class PostCardComp extends Component{
    constructor(props){
        super(props)
        this.state={
            post: this.props.posts,
            isDivShown: true,
            newObj:''
        }
    }


render(){
    return(
        <div style={{border:'2px solid orange',margin:'2px'}}>
             
                Title:{this.state.post.title}
                <br/>
                Body:{this.state.post.body}
              
            </div>
    )
}
}
export default PostCardComp