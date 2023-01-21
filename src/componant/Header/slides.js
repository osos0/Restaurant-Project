import { Component, Fragment } from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";

class Slides extends Component {
  render() {
    return (
      <section className="slide_Testimonials">
        <div className="row ">
          <div className="col-med-12">
            <p>Testimonials</p>
            <div className="slideCon">
              <Carousel>
                <Carousel.Item>
                  <img src={require("../../imges/11.jpg")} />
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <h3>First slide label</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={require("../../imges/22.jpg")} />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <h3>Second slide label</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={require("../../imges/11.jpg")} />
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                  <h3>Third slide label</h3>
                  <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slides;
