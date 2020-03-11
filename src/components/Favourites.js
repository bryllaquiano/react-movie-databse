import React, { useState, useEffect } from "react";
import "../App.css";
import { setStorage, getStorage } from "../utilities/Storage";
import MovieGrid from "./MovieGrid";

function Favourites() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [results, setResults] = useState([]);

  const fetchItems = async () => {
    const myFavouritesId = getStorage("favouriteMoviesID");
    const myFavouriteMovies = [];
    for (let id of myFavouritesId) {
      let fetchItem = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b84f9f8772ef02c1cf8d0490d9309a00&language=en-US`
      );

      let item = await fetchItem.json();
      myFavouriteMovies.push(item);
    }
    setResults(myFavouriteMovies);
  };

  const removeFromFavourites = id => {
    let favouritesArray = getStorage("favouriteMoviesID");
    if (favouritesArray.includes(id, 0)) {
      const index = favouritesArray.indexOf(id);
      favouritesArray.splice(index, 1);
    }
    setStorage(favouritesArray, "favouriteMoviesID");
    fetchItems();
  };

  return (
    <div>
      <h2>Favourite Movies</h2>
      <MovieGrid movieData={results} />
    </div>
  );
}

export default Favourites;
