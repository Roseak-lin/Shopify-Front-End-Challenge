import React from "react";

export default class Nominations extends React.Component {
  render() {
    let items = this.props.nominations.map((nomination, ind) => {
      return (
        <li key={ind}>
          {nomination[0]} ({nomination[1]}) <button>Remove</button>
        </li>
      );
    })
    return (
      <div id="nominations">
        <h3>Nominations</h3>
        <ul id="nominations-list">
          {items}
        </ul>
      </div>
    );
  }
}
