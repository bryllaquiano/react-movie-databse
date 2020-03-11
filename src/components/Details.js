import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setStorage, getStorage } from "../utilities/Storage";

function Details({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [result, setResult] = useState({});
  const [genre, setGenre] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [resultCredits, setResultCredits] = useState([]);
  const [credits, setCredits] = useState([]);

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=b84f9f8772ef02c1cf8d0490d9309a00&language=en-US`
    );

    const fetchItemCredits = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=b84f9f8772ef02c1cf8d0490d9309a00`
    );

    const item = await fetchItem.json();
    const itemCredits = await fetchItemCredits.json();

    setResult(item);
    setResultCredits(itemCredits);

    const credits = itemCredits.cast.splice(0, 5);
    setCredits(credits);

    const genres = item.genres;
    setGenre(genres);
    setFavourites(getStorage("favouriteMoviesID"));
  };

  const addToFavourites = id => {
    let favouritesArray = getStorage("favouriteMoviesID");
    if (favouritesArray.includes(id, 0)) {
      const index = favouritesArray.indexOf(id);
      favouritesArray.splice(index, 1);
    } else {
      favouritesArray.push(id);
    }
    setFavourites(favouritesArray);
    setStorage(favouritesArray, "favouriteMoviesID");
  };


  return (
    <div className="details">
      <h2>{result.title}</h2>
      <div className="details-page">
        <div className="movie-image">
          <img
            id="movie-poster"
            src={"http://image.tmdb.org/t/p/w185/" + result.poster_path}
            alt={"Poster of " + result.title}
            title={"Poster of " + result.title}
          />
          <br />
          <button onClick={() => addToFavourites(result.id)}>
            {favourites.includes(result.id) ? (
              <span>
                <FontAwesomeIcon icon={["fas", "heart"]} /> Remove from
                Favourites
              </span>
            ) : (
              <span>
                <FontAwesomeIcon icon={["far", "heart"]} /> Add to Favourites
              </span>
            )}
          </button>
        </div>

        <div className="movie-details">
          <table>
            <tbody>
              <tr>
                <th>Rating </th>
                <td>
                  <FontAwesomeIcon icon={["fas", "star"]} />
                  {result.vote_average}/10{" "}
                </td>
              </tr>
              <tr>
                <th>Release Date </th>
                <td>{result.release_date}</td>
              </tr>
              <tr>
                <th>Genre</th>
                <td>
                  <div className="genres">
                    {genre.map(genres => (
                      <li key={genres.name}>{genres.name}</li>
                    ))}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <h4>Overview:</h4>
          <p>{result.overview}</p>
        </div>
      </div>{" "}
      <h4>Cast</h4>
      <div className="credits-section">
        {credits.map(cast => (
          <div>
            <li key={cast.name}>{cast.name}</li>
            <img
              id="movie-poster"
              src={"http://image.tmdb.org/t/p/w185/" + cast.profile_path}
              title={"Photo of " + cast.name}
              alt={"Photo of " + cast.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Details;

// Reference

{
  /* How to iterate an object inside an array (solution for displaying genres. Also, changed useState({}) to useState([])): https://stackoverflow.com/questions/30142361/react-js-uncaught-typeerror-this-props-data-map-is-not-a-function */
}
{
  /* How to use poster path: https://www.themoviedb.org/talk/568e3711c3a36858fc002384 */
}
{
  /* How to remove an element from an array (remove from My Favourites): https://stackoverflow.com/questions/5767325/how-do-i-remove-a-particular-element-from-an-array-in-javascript */
}
