import React, { Component, Fragment } from "react";
import javascript from "../../Images/javascript.png";
import OneService from "../subComponents/OneService";
import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import VisitedProfileOverview from "../subComponents/VisitedProfileOverview";
import VisitedProfileDescription from "../subComponents/VisitedProfileDescription";
import "../../Styles/gig_managment.css";
import "../../Styles/general-gigs.css";
import "../../Styles/work.css";
import "../../Styles/profile.css";

import { connect } from "react-redux";
import { userGigs } from "../../Redux/Actions/Gigs";
import { getFullProfile } from "../../Redux/Actions/Profile";
import Config from "../../Config/Config";
const { API_URI } = Config;
class VisitedProfile extends Component {
  constructor() {
    super();
    this.state = {
      showPausedGigs: false,
      activeClass1: "activate_switcher",
      activeClass2: null,
      ProfileId: "",
      ProfileGigs: []
    };
  }

  componentDidMount() {
    // console.log();
    let ProfileId = this.props.location.search.split("=")[1];
    this.setState({ ProfileId });
    this.props.userGigs(ProfileId);
    this.props.getFullProfile(ProfileId);
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps = async nextProps => {
    const { result } = nextProps.ProfileGigs;
    await this.setState({ ProfileGigs: result });
    // console.log(result);
  };

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="my-container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 parent">
                <VisitedProfileOverview
                  props={this.props}
                  Profile={this.props.Profile}
                />

                <div className="child">
                  <VisitedProfileDescription />
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-8 col-lg-8 gigs">
                <div className="parent">
                  <div className="head">
                    <span
                      className={
                        "btn profile_gig_settings " + this.state.activeClass1
                      }
                    >
                      الخدمات المتاحة
                    </span>
                  </div>
                  <div className="general-gigs-show">
                    {this.state.ProfileGigs.map(gig => {
                      if (gig.GigStatus) {
                        return (
                          <OneService
                            key={Math.random()}
                            title={gig.Overview.GigTitle}
                            serviceImage={`${gig.Gallery.Images.split(" ").join(
                              "%20"
                            )}`}
                            price={gig.Pricing.Price}
                            userImage={javascript}
                            love={gig.Love}
                            gigId={gig._id}
                            profileId={gig.ProfileId}
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
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
  return {
    ProfileGigs: state.userGigs.profileGigs,
    Profile: state.getAllProfileData.profile
  };
};
const mapActionsToState = {
  userGigs,
  getFullProfile
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(VisitedProfile);
