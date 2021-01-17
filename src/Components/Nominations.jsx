import React from "react";

export default class Nominations extends React.Component {
  render() {
    const items = this.props.nominations.map((nomination, ind) => {
      return (
        <div className="nomination-card" key={ind}>
          {nomination[0]} ({nomination[1]}){" "}
          <button
            onClick={() => this.props.onClick(ind)}
            className="remove"
          >
            Remove
          </button>
        </div>
      );
    });
    return (
      <div className="lower-half-child">
          <div className="lower-half-container">
          <h3>Nominations</h3>
          <div id="nomination-list">{items}</div>
        </div>
      </div>
    );
  }
}
