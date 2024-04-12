import React, { useState } from "react";
import ReactDOM from "react-dom";

import Header from "./components/Header";
import States from "./components/States";
import Example from "./components/Example";

function App() {
    const [showStates, setShowStates] = useState(true);
    const [buttonWasClicked, setButtonWasClicked] = useState("");

    const handleSwitchView = () => {
        setShowStates(!showStates);
    };

    const handleButtonClick = (buttonName) => {
        setButtonWasClicked(buttonName);
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
                    <div>
                        <Example />,
                        {buttonWasClicked && (
                            <span>Last button clicked was: {buttonWasClicked}</span>
                        )}
                        <button
                            type="button"
                            onClick={() => handleButtonClick("one")}
                        >
                            Call handleButtonClick function with one
                        </button>
                        <button
                            type="button"
                            onClick={() => handleButtonClick("two")}
                        >
                            Call handleButtonClick function with two
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("reactapp"));
