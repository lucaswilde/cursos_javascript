import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import AsyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = AsyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {

    render () {
        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact >Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost}/>
                    <Route path="/posts" component={Posts}/>
                    <Redirect from ="/" to="/posts"/>
                </Switch>
            </div>
        );
    }
}

export default Blog;