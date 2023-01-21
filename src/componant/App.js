import React, { Component, Fragment } from "react";
import Navs from "./Header/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Header/Home";
import Cards from "./Card_Section/cards";
import Slides from "./Header/slides";
import Footers from "./Header/footers";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navs />
        <Home />
        <Cards />
        <Slides />
        <Footers />
      </Fragment>
    );
  }
}
export default App;
