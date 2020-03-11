import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tmdbLogo from "../images/tmdb-logo.png";

function MovieGrid(props) {
  useEffect(() => {
    refreshItems();
  }, [props]);

  const [results, setResults] = useState(props.movieData);
  console.log(props);

  const refreshItems = () => {
    setResults(props.movieData);
  };

  return (
    <div>
      {results.length === 0 ? (
        <p>No Movies</p>
      ) : (
        <div className="movie-grid">
          {results.map(item => (
            <div className="movie-list">
              <Link to={`/details/${item.id}`}>
                <img
                  id="movie-poster"
                  src={
                    item.poster_path != null
                      ? "http://image.tmdb.org/t/p/w185" + item.poster_path
                      : tmdbLogo
                  }
                  title={item.title}
                />
              </Link>
              <div className="movie-overview">
                <div>
                  <FontAwesomeIcon icon={["fas", "star"]} />
                  <i> {item.vote_average}/10 </i>
                </div>
                <p>Release date: {item.release_date}</p>
                <p>
                  {item.overview.split(".")[0]}.<i> </i>
                  <Link to={`/details/${item.id}`}> More Info...</Link>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieGrid;
