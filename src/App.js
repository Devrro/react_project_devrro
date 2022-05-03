import React from "react";
import {Routes,Route} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import CarsPage from "./pages/CarsPage/CarsPage";
import SingleCarPage from "./pages/SingleCarPage/SingleCarPage";

function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MainLayout/>}>
              <Route path={'home'} element={<HomePage/>}/>
              <Route path={'cars'} element={<CarsPage/>}/>
              <Route path={'cars/:carId'} element={<SingleCarPage/>}/>
          </Route>
      </Routes>
  )

}

export default App;
