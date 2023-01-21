import React, { Component, Fragment } from "react";
import Navs from "../componant/Header/Nav";
import Cards from "../componant/Card_Section/cards";
import Footers from "../componant/Header/footers";

class Explore extends Component {
  render() {
    return (
      <Fragment>
        <Navs />
        <Cards />
        <Footers />
      </Fragment>
    );
  }
}
export default Explore;
