import React from 'react';
// import Button from "../Button/Button";
import {Link} from "react-router-dom";
import Button from "../Button/Button";

const User = ({user}) => {
    const{id,name, username}=user

    return (
        <div>
            {id} -- {name} -- {username}
            <Button to={`${id}`} state={user}>Get Details</Button>

        </div>
    );
};

export default User;