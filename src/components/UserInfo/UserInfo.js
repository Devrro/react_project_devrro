export const UserDetail =({userInfo, setUserIdForPosts})=>{
    const {name,phone,id} = userInfo;
    return(
        <div className={'Post'}>
            <div>Name  : {name}</div>
            <div>Phone : {phone}</div>
            <input type='button' value='POSTS' onClick={()=>{setUserIdForPosts(id)}}/>
        </div>
    )
}