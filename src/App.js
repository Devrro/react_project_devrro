import Users from "./components/Users/Users";
import {useState} from "react";
import {UserDetail,Posts} from "./components";
import styles from './App.module.css'

function App() {
    const [userInfo, setUserInfo] = useState(null)
    const [userIdForPosts, setUserIdForPosts] = useState(null)
    return (
        <div className={styles.main_container}>
            <div className={styles.user_list}>
                <Users setUserInfo={setUserInfo}/>
            </div>

            <div className={styles.user_info}>
                {userInfo && <div><UserDetail userInfo={userInfo} setUserIdForPosts={setUserIdForPosts}/></div>}

            </div>
            <div className={styles.user_posts}>
                {userIdForPosts && <Posts PostsID={userIdForPosts}/>}
            </div>
        </div>
    )

}

export default App;
