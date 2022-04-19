import React from 'react';

const UserDetail = ({user}) =>{
    const {id, name, username, email} = user;
    return (
        <div>
            <div>ID:{id}</div>
            <div>Name:{name}</div>
            <div>Username:{username}</div>
            <div>email:{email}</div>
        </div>
    );
};

export default UserDetail;