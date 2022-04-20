import React from "react";
import {Routes,Route,Navigate} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'home'} element={<HomePage/>}/>
          </Route>
      </Routes>
  )

}

export default App;
