const User = ({user,setUserInfo}) => {
    const {id, name, username} = user;
    return (
        <div>
            {id} -- {name} -- {username}
            <button onClick={() => {setUserInfo(user)}}>SHOW INFO</button>
        </div>
    )
}

export default User;