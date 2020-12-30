import React from "react";
import axios from "axios";
import { SearchBar } from "./Searchbar";
import Results from "./Results";
import Nominations from "./Nominations";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNomination = this.addNomination.bind(this);

    this.state = {
      movieName: "",
      searchResults: [],
      nominations: [],
    };
  }



  handleChange(e) {
    this.setState({
      movieName: e.target.value,
      searchResults: [],
    });
    // API request call
    let requestUrl =
      "http://www.omdbapi.com/?s=" + e.target.value + "&apikey=7b7631bb";
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
    if (this.state.nominations.some((item) => item[2] == id)) {
      return;
    }
    nominations.push([title, year, id]);
    this.setState({ nominations: nominations });
  }

  render() {
    return (
      <div>
        <h1 id="main-title">The Shoppies</h1>
        <SearchBar onChange={this.handleChange}/>
        <div>
          <Results
            movieName={this.state.movieName}
            results={this.state.searchResults}
            onClick={this.addNomination}
          />
          <Nominations nominations={this.state.nominations} />
        </div>
      </div>
    );
  }
}

export default Main;
