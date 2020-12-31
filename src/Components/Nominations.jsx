import React from "react";

export default class Nominations extends React.Component {
  render() {
    let items = this.props.nominations.map((nomination, ind) => {
      return (
        <li key={ind}>
          {nomination[0]} ({nomination[1]}){" "}
          <button
            onClick={() => this.props.onClick(nomination[2])}
            className="remove"
          >
            Remove
          </button>
        </li>
      );
    });
    return (
      <div className="lower-half-child">
          <div className="lower-half-container">
          <h3>Nominations</h3>
          <ul id="nominations-list">{items}</ul>
        </div>
      </div>
    );
  }
}
