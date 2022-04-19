import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import userService from "../services/user.service";
import User from "../components/User/User";


const UsersPage = () => {
    const [users,setUsers] = useState(null);
    useEffect(()=>{
        userService.getAll().then(({data})=>setUsers(data))
    },[])

    return (
        <div style={{display:'flex'}}>
            <div>{users && users.map((user) => <User key={users.id} user={user}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export default UsersPage;