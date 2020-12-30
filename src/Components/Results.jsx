import React from "react";

export default class Results extends React.Component {
  render() {
    return (
      <div id="results">
        <h3>
          Results for{" "}
          {this.props.movieName === "" ? "" : '"' + this.props.movieName + '"'}
        </h3>
        <ul id="searchResults-list">
          {this.props.results.map((movie, ind) => (
            <li key={ind}>
              {movie.Title} ({movie.Year}){" "}
              <button
              
                onClick={() =>
                  this.props.onClick(movie.Title, movie.Year, movie.imdbID)
                }
              >
                Nominate
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}