import {useEffect, useState} from "react";
import {UserServices} from "../../services";
import Post from "../Post/Post";
import styles from './Posts.module.css'

export let Posts = ({PostsID})=>{
    const [posts,setPosts] = useState(null)
    useEffect(()=>
        {
        UserServices.getUsersPosts(PostsID).then(({data})=>setPosts(data))
        },[PostsID]
    )
    return (
        <div className={styles.posts}>
            {posts && posts.map((somePost)=><Post key={somePost.id} post={somePost}/>)}
        </div>
    )
}
