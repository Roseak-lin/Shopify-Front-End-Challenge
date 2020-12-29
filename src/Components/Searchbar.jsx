import React from "react";

export function SearchBar(props) {
  return (
    <div id="searchbar">
      <h4>Movie Title</h4>
      <input id="textfield" onChange={props.onChange} />
    </div>
  );
}
