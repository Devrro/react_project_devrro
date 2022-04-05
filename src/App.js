import Comments from "./components/Comments";
import Users from "./components/Users";
import Posts from "./components/Posts";

    let urlComments = 'https://jsonplaceholder.typicode.com/comments'
let urlPosts = 'https://jsonplaceholder.typicode.com/posts'
let urlUsers = 'https://jsonplaceholder.typicode.com/users'

function App() {
  return (
      <div className={'main_container'}>
        <Users url={`${urlUsers}`}/>
        <Posts url={`${urlPosts}`}/>
        <Comments url={`${urlComments}`}/>
      </div>
  )

}

export default App;
