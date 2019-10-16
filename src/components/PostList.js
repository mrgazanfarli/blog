import React from 'react';

import * as post from '../apis/post';
import Preloader from './Preloader';
import Post from './Post';

class PostList extends React.Component {
    state = {
        posts: [],
        postsLoaded: null
    }

    loadPosts = async () => {
        try {
            const response = await post.getAll()
            this.setState({
                posts: response.data,
                postsLoaded: true
            });
        } catch (error) {
            this.setState({ postsLoaded: false })
        }
    }

    componentDidMount() {
        this.loadPosts();

    }

    render() {
        let { postsLoaded, posts } = this.state;
        return (
            postsLoaded === null ? (
                    <Preloader />
            ) : postsLoaded === false ? (
                <div>
                    <h3 className="text-warning">Loading failed!</h3>
                </div>
            ) : (
                        posts.map(post => {
                            return (
                                <Post key={post.id} post={post} />
                            )
                        })
                    )
        )
    }
}

export default PostList;