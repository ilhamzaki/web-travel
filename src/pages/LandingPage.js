import React, { Component } from "react";

import Header from "parts/Header";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";

import dataLandingPage from "json/landingPage.json";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={dataLandingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={dataLandingPage.mostPicked}
        />
        <Categories data={dataLandingPage.categories} />
        <Testimony data={dataLandingPage.testimonial} />
        <Footer />
      </>
    );
  }
}
