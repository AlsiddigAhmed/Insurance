import React, { Component, Fragment } from "react";

import PrivateNavbar from "./subComponents/PrivateNavbar";
import Footer from "./subComponents/Footer";

import OverviewGigData from "./subComponents/OverviewGigData";
import PricingGigData from "./subComponents/PricingGigData";
import DescriptionGigData from "./subComponents/DescriptionGigData";

import { createGig } from "../Redux/Actions/Gigs";
import { connect } from "react-redux";
import FormData from "form-data";

import "./ComponentsStyle/create-gig.css";

class CreateGig extends Component {
  constructor() {
    super();
    this.state = {
      openOverview: true,
      OverviewData: {
        gigTitle: "",
        gigCat: "",
        serviceType: "",
        tags: []
      },
      PricingData: {
        GigDays: 0,
        GigPrice: 0,
        GigReviews: 0
      },
      Description: "",
      Image: ""
    };
  }
  overviewData = data => {
    const { gigTitle, gigCat, serviceType, tags } = data;
    this.setState({ OverviewData: { gigTitle, gigCat, serviceType, tags } });
  };

  pricingData = data => {
    const { GigPrice, GigDays, GigReviews } = data;
    this.setState({ PricingData: { GigPrice, GigDays, GigReviews } });
  };

  descData = async data => {
    const { Description, Image } = data;
    this.setState({
      Description,
      Image
    });

    setTimeout(async () => {
      await this.handlePostGig();
    }, 2000);
  };

  handlePostGig = async () => {
    let Data = {
      tags: this.state.OverviewData.tags,
      gigCat: this.state.OverviewData.gigCat,
      gigDays: this.state.PricingData.GigDays,
      gigPrice: this.state.PricingData.GigPrice,
      gigTitle: this.state.OverviewData.gigTitle,
      gigReviews: this.state.PricingData.GigReviews,
      serviceType: this.state.OverviewData.serviceType,
      Description: this.state.Description,
      Image: this.state.Image
    };

    let formData = new FormData();
    formData.append("desc", Data.Description);
    formData.append("tag", Data.tags);
    formData.append("cat", Data.gigCat);
    formData.append("day", Data.gigDays);
    formData.append("title", Data.gigTitle);
    formData.append("reviews", Data.gigReviews);
    formData.append("type", Data.serviceType);
    formData.append("price", Data.gigPrice);
    formData.append("image", Data.Image);

    await this.props.createGig(
      localStorage.ProfileId,
      localStorage.id,
      formData
    );

    setTimeout(() => {
      this.props.history.push(
        `/profile/${localStorage.user}/${localStorage.ProfileId}`
      );
    }, 2000);
  };

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-sm-12">
                <div className="create-gig">
                  <div style={{ margin: 10 }}>
                    <div className="text-center" style={{ padding: 10 }}>
                      <span style={{ fontSize: 25 }}>إنشاء خدمة جديدة </span>
                    </div>
                    <OverviewGigData
                      status={true}
                      openTime={0}
                      overviewData={this.overviewData}
                    />

                    <PricingGigData
                      status={true}
                      openTime={0}
                      pricingData={this.pricingData}
                    />
                    <DescriptionGigData
                      status={true}
                      openTime={0}
                      descData={this.descData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapActionsToState = {
  createGig
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(CreateGig);
