import React from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import MainLayout from "./layout/MainLayout/MainLayout";
import AnimalsCreator from "./pages/AnimalsCreator";
import HomePage from "./pages/HomePage/HomePage";

function App() {


    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/animalCreator'}/>}/>
                <Route path={'/animalCreator'} element={<AnimalsCreator/>}/>
                <Route path={'/home'} element={<HomePage/>}/>
            </Route>
        </Routes>
    )

}

export default App;
