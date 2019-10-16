import React from 'react';
import { Link } from 'react-router-dom';

const Post = props => {
    let { post } = props;
    let charactersToShow = 150;

    return (
        <div className="card shadow p-2 mb-3">
            <div className="card-body">
                <Link className="text-dark text-decoration-none" to={`posts/${post.id}/details`}>
                    <h5 className="card-title">{post.title}</h5>
                </Link>
                <p className="card-text">
                    {post.body.length > charactersToShow ? `${post.body.substring(0, charactersToShow)}...` : post.body}
                </p>
            </div>
        </div>
    )
}

export default Post;