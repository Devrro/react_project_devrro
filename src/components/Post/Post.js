import React from 'react';
// import Button from "../Button/Button";
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const{id,title}=post

    return (
        <div>
            {id} -- {title}
            <Link to={`${id}`} state={post}>Get Details</Link>
            {/*<Button>User Detail</Button>*/}

        </div>
    );
};

export default Post;