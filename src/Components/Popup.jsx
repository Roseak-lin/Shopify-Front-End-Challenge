import React from "react";

export default class Popup extends React.Component {
  render() {
    return (
      <div id="popup">
        <div id="popup-text">
          You have already nominated 5 films! <span id="close">&times;</span>
        </div>
      </div>
    );
  }
}
