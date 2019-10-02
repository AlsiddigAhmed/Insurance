import React, { Component, Fragment } from "react";
import PrivateNavbar from "./subComponents/PrivateNavbar";
import Footer from "./subComponents/Footer";
import GigStatus from "./subComponents/GigsStatusManagement";

import "./ComponentsStyle/gig_managment.css";

import { connect } from "react-redux";
import { userGigs } from "../Redux/Actions/Gigs";
import Config from "../Config/Config";

const { API_URI } = Config;

class GigManagement extends Component {
  constructor() {
    super();
    this.state = {
      AllProfileGigs: []
    };
  }

  componentWillMount = () => {
    this.props.userGigs(localStorage.ProfileId);
  };

  componentWillReceiveProps = async nextProps => {
    const { result } = nextProps.fetchProfileGigs;
    if (result) {
      this.setState({ AllProfileGigs: result });
    }
  };

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-12 ">
                <div className="gig">
                  {this.state.AllProfileGigs.map(gig => {
                    return (
                      <GigStatus
                        key={Math.random()}
                        image={`${API_URI}/${gig.Gallery.Images.split(" ").join(
                          "%20"
                        )}`}
                        price={gig.Pricing.Price}
                        love={gig.Love}
                        seriveId={gig._id}
                        active={gig.GigStatus}
                        title={gig.Overview.GigTitle}
                      />
                    );
                  })}
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
  return {
    fetchProfileGigs: state.userGigs.profileGigs
  };
};
const mapActionsToProps = {
  userGigs
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(GigManagement);
