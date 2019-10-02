import React, { Fragment, Component } from "react";
// import { Link } from "react-router-dom";
import "../../Styles/home.css";
import Header from "../subComponents/Header";
import Work from "../subComponents/work";
import ExtraFeatures from "../subComponents/ExtraFeatures";
import Features from "../subComponents/Features";
import InsurancePrice from "../subComponents/InsurancePrice";
import Testimonials from "../subComponents/Testimonials";
import Footer from "../subComponents/Footer";
import Navbar from "../subComponents/Navbar";

import "../../Styles/footer.css";

class Home extends Component {
  componentWillMount() {
    if (localStorage.user && localStorage.token) {
      this.props.history.replace("/user/" + localStorage.user);
    } else {
      //
    }
  }
  render() {
    return (
      <Fragment>
        <Navbar />
        <Header />
        <Work />
        <ExtraFeatures />
        <Features />
        <InsurancePrice />
        <div className="super_container">
          <Testimonials />
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default Home;
