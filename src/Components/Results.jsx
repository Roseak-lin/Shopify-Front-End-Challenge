import React from "react";

export default class Results extends React.Component {
  render() {
    let nominations = this.props.nominations;
    const list = this.props.results.map((movie, ind) => {
      return (
        <div className="results-card" key={ind}>
          {movie.Title} ({movie.Year}){" "}
          <button
            disabled={nominations.some(
              (nomination) => nomination[2] == movie.imdbID
            )}
            onClick={() =>
              this.props.onClick(movie.Title, movie.Year, movie.imdbID)
            }
            className="nominate"
          >
            Nominate
          </button>
        </div>
      );
    });

    return (
      <div className="lower-half-child" style={{ marginRight: 5 + "%" }}>
        <div className="lower-half-container">
          <h3>
            Results for
            {this.props.movieName === ""
              ? ""
              : ' "' + this.props.movieName + '"'}
          </h3>
          <div id="searchResults-list">{list}</div>
        </div>
      </div>
    );
  }
}
