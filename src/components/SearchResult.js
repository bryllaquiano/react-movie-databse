import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "../utilities/FontAwesome";
import MovieGrid from "../components/MovieGrid";

function SearchResult({ match }) {
  const [results, setResults] = useState([]);
  const searchQuery = match.params.searchterm;

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=b84f9f8772ef02c1cf8d0490d9309a00&language=en-US&page=1&include_adult=false&query=" +
        searchQuery
    );
    const items = await data.json();

    setResults(items.results);
  };
  //add parameter that will change in square brackets
  //https://stackoverflow.com/questions/59815246/react-router-not-receiving-props-if-its-the-same-path-but-different-param

  useEffect(() => {
    fetchItems();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Result</h2>
      <MovieGrid movieData={results} />
    </div>
  );
}

export default SearchResult;
