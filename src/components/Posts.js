import {useState, useEffect} from "react";
// import {part_builder,element_builder} from "./PartBuilder";

let Posts = ({url}) => {
    let [posts, editPosts] = useState([]);
    useEffect(() => {
        fetch(`${url}`, {})
            .then(value => value.json())
            .then(value => editPosts(value))
    })
    return (
        <div className={'postsSection'}>
            {
                posts.map(post =>
                    <div className={'post'}>
                        <div>POST : {post.id}</div>
                        <div>{post.title}</div>
                        <p>{post.body}</p>
                    </div>)
            }
        </div>
    )
}

export default Posts;