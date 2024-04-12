import React from "react";
import "./styles.css";

class States extends React.Component {
  constructor(props) {
    super(props);
    const statesData = window.cs142models.statesModel();
    this.state = {
      substring: "",
      filteredStates: statesData
    };
  }

  handleChange = (event) => {
    const substring = event.target.value.toLowerCase();
    const filteredStates = window.cs142models.statesModel().filter(state => state.toLowerCase().includes(substring)
    );
    this.setState({ substring, filteredStates });
  };

  render() {
    const { substring, filteredStates } = this.state;

    return (
      <div className="State-text">
        <input
          type="text"
          value={substring}
          onChange={this.handleChange}
          placeholder="Search..."
        />
        <div>
          <p>Haisan muj: {substring}</p>
          <ul>
            {filteredStates.length > 0 ? (
              filteredStates.map((state, index) => (
                <li key={index}>{state}</li>
              ))
            ) : (
              <p>Tanii haisan muj oldsongui.</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default States;
