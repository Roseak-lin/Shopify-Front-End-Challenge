import React from "react";
import axios from "axios";
import { SearchBar } from "./Searchbar";
import Results from "./Results";
import Nominations from "./Nominations";
import Popup from "./Popup";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.addNomination = this.addNomination.bind(this);
    this.removeNomination = this.removeNomination.bind(this);

    this.state = {
      movieName: "",
      searchResults: [],
      nominations:
        localStorage.getItem("Nominations") === null
          ? []
          : JSON.parse(localStorage.getItem("Nominations")),
    };
  }

  // method that updates searchresults whenever the input field changes
  handleChange(e) {
    this.setState({
      movieName: e.target.value,
      searchResults: [],
    });

    // OMDb API request call
    let requestUrl =
      "https://www.omdbapi.com/?s=" + e.target.value + "&apikey=7b7631bb";
    axios
      .get(requestUrl)
      .then((keyword) => {
        let movies = keyword.data.Search;
        let searchResults = [];
        if (movies !== undefined) {
          for (let i = 0; i < movies.length && searchResults.length < 5; i++) {
            searchResults.push(movies[i]);
          }
        }
        this.setState({ searchResults: searchResults });
      })
      .catch((e) => console.log(e));
  }

  // nominate onClick function
  addNomination(title, year, id) {
    let nominations = this.state.nominations.slice();
    if (this.state.nominations.some((movie) => movie[2] === id)) {
      return;
    } else if (nominations.length === 5) {
      document.getElementById("popup").style.display = "block";
      return;
    }
    // code for running insertion animation
    nominations.push([title, year, id]);
    this.setState({ nominations: nominations }, () => {
      const newCard = document.getElementsByClassName("nomination-card")[
        this.state.nominations.length - 1
      ];
      newCard.classList.add("add-card");
      setTimeout(() => {
        newCard.classList.remove("add-card");
      }, 100);
    });
    localStorage.setItem("Nominations", JSON.stringify(nominations));
  }

  // remove nominations onClick function
  // key parameter needed to run animation
  removeNomination(key) {
    let nominations = this.state.nominations.slice();
    let removedCard = document.getElementsByClassName("nomination-card")[key];
    removedCard.classList.add("remove-card");
    nominations.splice(key, 1);
    // give time for animation to run
    setTimeout(() => {
      // remove "opacity: 0" property from new card that takes the spot of the old card
      this.setState({ nominations: nominations }, () => {
        removedCard.classList.remove("remove-card");
        localStorage.setItem(
          "Nominations",
          JSON.stringify(this.state.nominations)
        );
      });
    }, 100);
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
            listIsFull={this.state.nominations.length === 5 ? true : false}
          />
          <Nominations
            nominations={this.state.nominations}
            onClick={this.removeNomination}
          />
        </div>
        <Popup />
      </div>
    );
  }
}

export default App;
