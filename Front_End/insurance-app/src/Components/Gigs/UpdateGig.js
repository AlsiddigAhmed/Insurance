import React, { Component, Fragment } from "react";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";

import OverviewGigData from "../UpdateGig/OverviewGigData";
import PricingGigData from "../UpdateGig/PricingGigData";
import DescriptionGigData from "../UpdateGig/DescriptionGigData";

import { getGigById } from "../../Redux/Actions/Gigs";
import { connect } from "react-redux";

import "../../Styles/create-gig.css";

class CreateGig extends Component {
  constructor() {
    super();
    this.state = {
      openOverview: true,
      gigId: "",
      gig: {}
    };
  }

  componentDidMount() {
    const gigId = this.props.match.params.id;
    this.setState({ gigId });
    this.props.getGigById(gigId);
  }

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
                      Overview={this.state.gig.Overview}
                      status={true}
                      openTime={0}
                      gigId={this.state.gigId}
                    />

                    <PricingGigData
                      Pricing={this.state.gig.Pricing}
                      status={true}
                      openTime={0}
                      gigId={this.state.gigId}
                    />
                    <DescriptionGigData
                      Description={this.state.gig.Description}
                      Gallery={this.state.gig.Gallery}
                      status={true}
                      openTime={0}
                      gigId={this.state.gigId}
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
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.gig.result) {
      this.setState({ gig: nextProps.gig.result });
    }
    setTimeout(() => {
      console.log(this.state.gig);
    }, 3000);
  }
}

const mapStateToProps = state => {
  return {
    gig: state.getGigById.gig
  };
};

const mapActionsToState = {
  getGigById
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(CreateGig);
