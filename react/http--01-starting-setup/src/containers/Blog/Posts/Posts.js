import React, { Component } from "react";
import Axios from 'axios';
import { Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {

    state = {
        posts: []
    }

    componentDidMount(){
        Axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                });
                this.setState({posts: updatedPosts});           
            })
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    postSelectedHandler(id){
        this.props.history.push({pathname: '/posts/' + id});
    }

    render(){
        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>;
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return(
                    <Post 
                        key={post.id}
                        title={post.title} 
                        author={post.author}
                        clicked={() => this.postSelectedHandler(post.id)}/>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
                <Route path={this.props.match.url + "/:id"} exact component={FullPost}/>
            </section>
        );
    }
}

export default Posts;