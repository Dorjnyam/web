import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";

function App() {
    const [showStates, setShowStates] = useState(true);

    const handleSwitchView = () => {
        setShowStates(!showStates);
    };

    return (
        <div>
            <Header />
            <button onClick={handleSwitchView}>
                {showStates ? "Switch to Example" : "Switch to States"}
            </button>
            <div className="cs142-example-output">
                <p>Test button clicks.</p>
                {showStates ? (
                    <States />
                ) : (
                    <Example />
                )}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("reactapp"));
