import React, { Component } from 'react'
import PostCardComp from './PostCard'

class PostComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: this.props.user.posts,
            newObj: '',
            isDivShown: true,
        }
        this.title = React.createRef()
        this.body = React.createRef()

    }
    componentDidMount = () => {
        console.log(this.state.posts)
    }


    createPost = () => {
        console.log(this.title.current.value)
        let post = {
            id: this.state.posts.length + 1,
            title: this.title.current.value,
            body: this.body.current.value
        }
        let newArray = [...this.state.posts, post];
        this.setState({ posts: newArray, isDivShown: true })



    }

    render() {
        let posts = this.state.posts.map(post => {
            return <PostCardComp key={post.id} posts={post} />
        })
        return (
            <div style={{ border: '1px solid orange' }}>
                <h4>Posts</h4>
                <input type='button' value='Add' onClick={this.createPost} />

                Title: <input type='text' ref={this.title} />
                <br />
                Body: <input type='text' ref={this.body} />
                {posts}

            </div>
        )
    }

}
export default PostComp
