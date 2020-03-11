import React from "react";
import "../App.css";
import Header from "./Header";
import About from "./About";
import Favourites from "./Favourites";
import Details from "./Details";
import Movies from "./Movies";
import SearchResult from "./SearchResult";
import Footer from "./Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { setStorage, getStorage } from "../utilities/Storage";

let favouriteMoviesID = getStorage("favouriteMoviesID")
  ? getStorage("favouriteMoviesID")
  : [];
setStorage(favouriteMoviesID, "favouriteMoviesID");

function Home() {
  return (
    <Router basename={'/movie-app'}>
      <div className="Home">
        <Header />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/about" component={About} />
          <Route path="/favourites" component={Favourites} />
          <Route path="/details/:id" exact component={Details} />
          <Route path="/searchresult/:searchterm" component={SearchResult} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Home;
