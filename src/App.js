import React from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostPage from "./pages/PostPage/PostPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route index element={<Navigate to={'home'}/>}/>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'users'} element={<UsersPage/>}/>
              <Route path={'posts'} element={<PostPage/>}>
                  <Route path={':id'} element={<SinglePostPage/>}/>
              </Route>
              <Route path={'about'} element={<AboutPage/>}/>
              <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
  )

}

export default App;
