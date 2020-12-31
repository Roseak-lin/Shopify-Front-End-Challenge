import React from "react";
import axios from "axios";
import { SearchBar } from "./Searchbar";
import Results from "./Results";
import Nominations from "./Nominations";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);

    this.state = {
      movieName: "",
      searchResults: [],
      nominations: [],
    };
  }

  // method that updates searchresults whenever the input field changes
  handleChange(e) {
    this.setState({
      movieName: e.target.value,
      searchResults: [],
    });

    // API request call
    let requestUrl =
      "https://www.omdbapi.com/?s=" + e.target.value + "&apikey=7b7631bb";
    axios
      .get(requestUrl)
      .then((keyword) => {
        let movies = keyword.data.Search;
        let searchResults = [];
        if (movies !== undefined) {
          for (let i = 0; i < movies.length && searchResults.length < 3; i++) {
            searchResults.push(movies[i]);
          }
        }
        this.setState({ searchResults: searchResults });
      })
      .catch((e) => console.log(e));
  }

  addNomination(title, year, id) {
    let nominations = this.state.nominations.slice();
    if (this.state.nominations.some((movie) => movie[2] === id)) {
      return;
    }
    nominations.push([title, year, id]);
    this.setState({ nominations: nominations });
    if (nominations.length == 5) {
      alert("You have 5 nominations!");
    }
  }

  removeNomination(id) {
    let nominations = this.state.nominations.slice();
    for (let i = 0; i < nominations.length; i++) {
      if (nominations[i][2] === id) {
        nominations.splice(i, 1);
        break;
      }
    }
    this.setState({ nominations: nominations });
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>The Shoppies</h1>
        </div>
        <div id="searchbar">
          <SearchBar onChange={this.handleChange} />
        </div>
        <div id="lower-half">
          <Results
            movieName={this.state.movieName}
            results={this.state.searchResults}
            onClick={this.addNomination}
            nominations={this.state.nominations}
          />
          <Nominations
            nominations={this.state.nominations}
            onClick={this.removeNomination}
          />
        </div>
      </div>
    );
  }
}

export default App;
