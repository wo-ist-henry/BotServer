import React from 'react';
import './App.css';

import {BrowserRouter as Router} from "react-router-dom";

import Topbar from "./shell/topbar/topbar";
import Sidenav from "./shell/sidenav/sidenav";
import Content from "./shell/content/content";

function App() {
    return (
        <div className="App">
            <Router>
                <div className="App--Topbar-Wrapper">
                    <Topbar/>
                </div>

                <div className="App--Sidenav-Wrapper">
                    <Sidenav/>
                </div>

                <div className="App-Content-Wrapper">
                    <Content/>
                </div>
            </Router>
        </div>
    );
}

export default App;
