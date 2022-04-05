import {useState, useEffect} from "react";

let Comments = ({url}) => {
    let [comments, editComments] = useState([]);
    useEffect(() => {
        fetch(`${url}`, {})
            .then(value => value.json())
            .then(value => editComments(value))
    })
    return (
        <div className={'commentsSection'}>
            {comments.map(comment =>
                <div className={'comment'}>
                    <div> COMMENT: {comment.id}</div>
                    <hr/>
                    <div>{comment.title}</div>
                    <div>{comment.email}</div>
                    <div>{comment.body}</div>
                </div>
            )}
        </div>
    )
}

export default Comments;