import React, { useEffect, useState } from 'react';
import Preloader from './Preloader';
import { useParams } from 'react-router-dom';
import * as postApi from '../apis/post';

const PostDetails = props => {
    const [post, setPost] = useState(null);
    const [postLoaded, setPostLoaded] = useState(null);
    let postId = useParams().postId;
    
    useEffect(() => {
        loadPosts();
    }, [])

    const loadPosts = async () => {
        try {
            const response = await postApi.getOne(postId)
            setPost(response.data[0]);
            setPostLoaded(true);
        } catch (error) {
            setPost(null);
            setPostLoaded(false);
        }
    }

    return (
        postLoaded === null ? (
            <Preloader />
        ) : postLoaded === false ? (
            <div>
                <h3 className="text-warning">Loading failed!</h3>
            </div>
        ) : (
                    <div className="card shadow p-2 mb-3">
                        <div className="card-body">
                            <h3 className="card-title text-info mb-4">{post.title}</h3>
                            <p className="card-text">{post.body.substring(0, 200)}</p>
                        </div>
                    </div>
                )
    )
}

export default PostDetails;