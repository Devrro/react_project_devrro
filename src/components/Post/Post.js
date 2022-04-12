import styles from "./Post.module.css"

export default function Post({post}) {
    const {id,title,body} = post
    return (
        <div className={styles.post}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{body}</div>
        </div>
    )
}