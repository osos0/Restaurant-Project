import React, { Component, Fragment } from "react";
import Navs from "../componant/Header/Nav";
import Slides from "../componant/Header/slides";
import Footers from "../componant/Header/footers";

class About_Me_Page extends Component {
  render() {
    return (
      <Fragment>
        <Navs />
        <Slides />
        <Footers />
      </Fragment>
    );
  }
}
export default About_Me_Page;
