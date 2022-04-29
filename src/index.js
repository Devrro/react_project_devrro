import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import './style.css'
import {Provider} from "react-redux";
import carStore from "./redux/store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={carStore}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
)