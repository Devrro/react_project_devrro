import React, {useEffect, useState} from 'react';
import postService from "../../services/post.service";
import Post from "../../components/Post/Post";
import {Outlet} from "react-router-dom";


const PostPage = () => {
    const [posts,setPosts] = useState(null);
    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[])

    return (
        <div style={{display:'flex'}}>
            <div>{posts && posts.map((post) => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default PostPage;