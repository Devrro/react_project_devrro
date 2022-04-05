import {useState, useEffect} from "react";
// import {part_builder,element_builder} from "./PartBuilder";

let Users = ({url}) => {
    let [users, editUsers] = useState([]);
    useEffect(() => {
        fetch(`${url}`, {})
            .then(value => value.json())
            .then(value => editUsers(value))
    })
    return (
        <div className={'userSection'}>
            {users.map(user =>
                <div className={'userCard'}>
                    <div>{user.name}</div>
                    <div>{user.username}</div>
                    <div>{user.email}</div>
                    <div>Address:
                        <div>{user.address.street}</div>
                        <div>{user.address.suite}</div>
                        <div>{user.address.city}</div>
                        <div>{user.address.zipcode}</div>

                        <div>Coordinats:
                            <p>{user.address.geo.lat}</p>
                            <p>{user.address.geo.lng}</p>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}

export default Users;