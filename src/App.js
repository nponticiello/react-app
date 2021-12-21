import React, {Component} from "react";
import Main from './components/MainComponent'
import {BrowserRouter} from "react-router-dom";
import './app.css';


function App() {
  return (
    <div className="container">
        <BrowserRouter>
            <Main/>
            </BrowserRouter>
    </div>
  );
}

export default App;
