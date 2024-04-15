import { HashRouter, Route, Link } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM

import "./p5.css";
import Header from "./components/Header";  
import States from "./components/States";  
import Example from "./components/Example";  

const App = () => {
    return (
        <HashRouter hashType="noslash">
            <div>
                <Header />
                <Link to="/example">Example</Link>
                <Link to="/states">States</Link>
                <Route path="/example" component={Example} />
                <Route path="/states" component={States} />
            </div>
        </HashRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("react-app")); // Use ReactDOM.render instead of React.render
