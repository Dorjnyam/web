import React from "react";
import ReactDOM from "react-dom";

import States from "./components/States";
import Header from "./components/Header";

ReactDOM.render(
    <div>
        <States />,
        <Header />
    </div>,
    document.getElementById("reactapp")
);
