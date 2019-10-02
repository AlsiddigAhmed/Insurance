import React, { Component, Fragment } from "react";

import OnePackage from "./OnePackage";

import "../../Styles/insurance-price.css";
class InsurancePrice extends Component {
  render() {
    return (
      <Fragment>
        <section className="section_gap big_features">
          <div className="container">
            <div className="prices row align-items-center">
              <OnePackage />
              <OnePackage />
              <OnePackage />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default InsurancePrice;
