import React from "react";
import ReactDOM from "react-dom";

import States from "./components/States";
import Example from "./components/Example";
import Header from "./components/Header";

ReactDOM.render(
    <div>
        <Example/>,
        <States />,
        <Header />
    </div>,
    document.getElementById("reactapp")
);
