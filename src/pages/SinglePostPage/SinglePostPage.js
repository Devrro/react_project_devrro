import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import postService from "../../services/post.service";
import PostDetail from "../../components/PostDetail/PostDetail";

const SinglePostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const postState = useLocation().state;
    // useEffect(() => {
    //     postService.getById(id).then(({data}) => setPost(data))
    // }, [id])
    return (
        <div>
            {post && <PostDetail post={post} postState={postState}/>}
        </div>
    );
};

export default SinglePostPage;