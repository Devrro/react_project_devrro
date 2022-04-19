import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import postService from "../../services/post.service";
import PostDetail from "../../components/PostDetail/PostDetail";

const SinglePostPage = () => {
    const {state} = useLocation();
    console.log(useLocation());
    const [post, setPost] = useState(state);
    const {id} = useParams();
    useEffect(() => {
        if (!state) {
            postService.getById(id).then(({data}) => setPost(data))
        } else {
            setPost(state)
        }
    }, [id])
    return (
        <div>
            {post && <PostDetail post={post}/>}
        </div>
    );
};

export default SinglePostPage;