import { Component, Fragment } from "react";

class Footers extends Component {
  render() {
    return (
      <Fragment>
        <section className="container Frequently">
          <div className="row Frequently text-center">
            <h2 className="col-md-12">Frequently Asked Questions</h2>
            <div className="col-md-6">
              ~ Is Foodera Bread really baked fresh each day? Far far away,
              behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in
              Bookmarksgrove right at the coast of the Semantics, a large
              language.
            </div>
            <div className="col-md-6">
              ~ Do you bake breads containing animal fats or products? Far far
              away, behind the word mountains, far from the countries Vokalia
              and Consonantia, there live the blind texts. Separated they live
              in Bookmarksgrove right at the coast of the Semantics, a large
              language.
            </div>
            <div className="col-md-6">
              ~ Can I order your products online? Far far away, behind the word
              mountains, far from the countries Vokalia and Consonantia, there
              live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language.
            </div>
            <div className="col-md-6">
              ~ When are you opening a shop near me? Far far away, behind the
              word mountains, far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live in Bookmarksgrove
              right at the coast of the Semantics, a large language.
            </div>
          </div>
        </section>
        <section className="container Hurry_up">
          <div className="row text-center mt-5">
            <h2 className="col-med-12">
              Hurry up! Subscribe our newsletter <br />
              and get 25% Off
            </h2>
            <p className="col-med-12">
              Limited time offer for this month. No credit card required.
            </p>
            <div className="container">
              <div className="row">
                <input
                  className="col-med-6"
                  type="text"
                  placeholder="Emil Address here"
                />
                <button type="submit" className="col-med-6">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="last_footer text-center">
          <div className="row">
            <div className="col-12 linko">
              <ul>
                <a href="">Register</a>
                <a href="">Forum</a>
                <a href="">Affiliate</a>
                <a href="">FAQ</a>
              </ul>
            </div>
            <div className="col-12 social">
              <ul>
                <a href="">
                  <i class="fa-brands fa-google"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-facebook-f"></i>{" "}
                </a>
                <a href="">
                  <i class="fa-brands fa-twitter"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-youtube"></i>
                </a>
                <a href="">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </ul>
            </div>
            <div className="col-12 color-white">
              <p>© 2021. Foodera. All rights reserved.</p>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Footers;
