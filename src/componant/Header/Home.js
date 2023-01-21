import { Component, Fragment } from "react";
import "../Header/Header.css";
// import headimg from "../../imges/3.jpg";
import lemon from "../../imges/1.png";
import manyPics from "../../imges/2.png";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <section className="Good food">
          <div className="container">
            <div className="row header">
              <div className="col-md-6 headflex">
                <h1>Good food choices are good investments.</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum amet leo.
                </p>
                <button type="">Order Now</button>
                <button className="button2" type="">
                  Learn More
                </button>
              </div>
              <div className="col-md-6">
                {/* <img src={headimg} alt="" /> */}
              </div>
            </div>
          </div>
        </section>
        <section className="nums">
          <div className="row text-center section2">
            <div className="col-md-3">
              <h1>1287+</h1>
              <p>Saving</p>
            </div>
            <div className="col-md-3">
              <h1>5786+</h1>
              <p>PHOTOS</p>
            </div>
            <div className="col-md-3">
              <h1>1440+</h1>
              <p>ROCKETS</p>
            </div>
            <div className="col-md-3">
              <h1>7110+</h1>
              <p>GLOBES</p>
            </div>
          </div>
        </section>
        <section className="Wepride">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <img src={lemon} alt="Pride-img" />
              </div>
              <div className="col-md-5">
                <h2>
                  We pride ourselves on making real food from the best
                  ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.
                </p>
                <button type="">
                  <a href="#">Learn More</a>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="Wemake">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>
                  We make everything by hand with the best possible ingredients.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet leo. Mauris
                  feugiat erat tellus.Far far away, behind the word mountains,
                  far from the countries Vokalia and Consonantia, there live the
                  blind texts.
                </p>
                <p>Etiam sed dolor ac diam volutpat.</p>
                <p>Erat volutpat aliquet imperdiet.</p>
                <p>Erat volutpat aliquet imperdiet.</p>
                <button type="">
                  <a href="#">Learn More</a>
                </button>
              </div>
              <div className="col-md-6">
                <img src={manyPics} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="stomach">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <h1>
                  When a man's stomach is full it makes no <br />
                  difference whether he is rich or poor.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio
                  <br /> finibus bibendum in sit amet leo. Mauris feugiat erat
                  tellus.
                </p>
                <div>
                  <a href="">Watch Our Story</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="ExploreOurFoods">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Explore Our Foods</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  et purus a odio finibus bibendum in sit amet
                  <br />
                  leo. Mauris feugiat erat tellus. Far far away, behind the word
                  mountains, far from the countries Vokalia and
                  <br />
                  Consonantia, there live the blind texts. Separated they live
                  in Bookmarksgrove.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;

{
  /* <img
className="d-block w-100"
src={require("../../imges/11.jpg")}
alt="First slide"
/>

<img
className="d-block w-100"
src={require("../../imges/22.jpg")}
alt="Second slide"
/>

<img
className="d-block w-100"
src={require("../../imges/11.jpg")}
alt="Third slide"
/> */
}
