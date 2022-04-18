import React from 'react';

const PostDetail = ({post}) =>{
    const {id, title, body, userId} = post;
    return (
        <div>
            <div>ID:{id}</div>
            <div>UserId0{userId}</div>
            <div>Title:{title}</div>
            <div>Body:{body}</div>
        </div>
    );
};

export default PostDetail;