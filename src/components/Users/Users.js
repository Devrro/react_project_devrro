import {useEffect, useState} from "react";
import User from "../User/User";
import {UserServices} from "../../services";


const Users = ({setUserInfo}) => {
    const [users, editUsers] = useState([]);

    useEffect(() => {
        UserServices.getALL().then(({data}) => editUsers(data))
    }, [])
    return (
        <div>
            {users.map((user) => <User key={user.id} user={user} setUserInfo={setUserInfo}/>)}
        </div>
    )
}

export default Users;