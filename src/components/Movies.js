import React, { useState, useEffect } from "react";
import "../App.css";
import MovieGrid from "./MovieGrid";

function Movies() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [results, setResults] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b84f9f8772ef02c1cf8d0490d9309a00&language=en-US&page=1"
    );
    const items = await data.json();
    console.log(items);
    setResults(items.results.slice(0, 12));
  };
  console.log(results);
  
  return (
    <div>
      <h2>Popular Movies</h2>
      <MovieGrid movieData={results} />
    </div>
  );
}

export default Movies;
