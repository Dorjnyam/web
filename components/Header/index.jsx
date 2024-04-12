import React from "react";
import "./styles.css";

class Header extends React.Component {
    render() {
        return (
            <div className="header-container" id="header">
                <nav className="header-nav">
                    <h3 className="header-title">
                        React JS дасгал
                    </h3>
                    <ul className="header-list">
                        <li><a href="getting-started.html" className="header-link">Getting Started</a></li>
                        <li><a href="p2.html" className="header-link">Problem 2</a></li>
                        <li><a href="p4.html" className="header-link">Problem 4</a></li>
                        <li><a href="p5.html" className="header-link">Problem 5</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
