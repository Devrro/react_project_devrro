import React from 'react';
// import Button from "../Button/Button";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const Post = ({post}) => {
    const{id,title}=post

    return (
        <div>
            {id} -- {title}
            <Button to={`${id}`} state={post}>Get Details</Button>

        </div>
    );
};

export default Post;