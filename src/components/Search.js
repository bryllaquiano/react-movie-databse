import React, { useState } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "../utilities/FontAwesome";
import { Link } from "react-router-dom";

function Search() {
  const [searchTerm, setSearchTerm] = useState([]);

  function searchChangeHandler(e) {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  return (
    <div className="search-bar">
      <form>
        <input
          onChange={searchChangeHandler}
          type="text"
          placeholder="search movie title..."
          name="search"
        />
        <Link to={`/searchresult/${searchTerm}`}>
          <button>
            <FontAwesome />
            <FontAwesomeIcon icon={["fa", "search"]} />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Search;
