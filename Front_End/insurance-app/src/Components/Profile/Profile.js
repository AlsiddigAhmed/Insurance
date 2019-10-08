import React, { Component, Fragment } from "react";
import "../../Styles/profile.css";

import OneService from "../subComponents/GigsStatus";
import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import ProfileOverview from "../subComponents/ProfileOverview";
import ProfileDescription from "../subComponents/ProfileDescription";
import "../../Styles/gig_managment.css";
import "../../Styles/profile.css";

import { connect } from "react-redux";
import { userGigs } from "../../Redux/Actions/Gigs";
import { getFullProfile } from "../../Redux/Actions/Profile";

import config from "../../Config/Config";
const { API_URI } = config;

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      showPausedGigs: false,
      activeClass1: "activate_switcher",
      activeClass2: null,
      profile: {
        ProfilePic: null,
        Description: null,
        Languages: [],
        Skills: []
      },
      ProfileGigs: []
    };
  }

  componentWillMount = async () => {
    await this.props.userGigs(localStorage.ProfileId);
    await this.props.getFullProfile(localStorage.ProfileId);
  };

  componentWillReceiveProps = async nextProps => {
    const { result } = nextProps.ProfileGigs;
    await this.setState({ ProfileGigs: result });
  };

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="my-container">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 parent">
                <ProfileOverview
                  ProfileId={localStorage.ProfileId}
                  props={this.props}
                  Profile={this.props.Profile}
                />

                <div className="child">
                  <ProfileDescription />
                </div>
              </div>

              <div className="col-12 col-sm-12 col-md-8 col-lg-8 gigs">
                <div className="parent">
                  <div className="head">
                    <span
                      className={
                        "btn profile_gig_settings " + this.state.activeClass1
                      }
                      onClick={this.showAvailable}
                    >
                      الخدمات النشطه
                    </span>
                    <span
                      className={
                        "btn profile_gig_settings " + this.state.activeClass2
                      }
                      onClick={this.showPaused}
                    >
                      الخدمات المتوقفة
                    </span>
                    <span
                      className="btn profile_gig_settings"
                      onClick={this.createGig}
                    >
                      إنشاء خدمة
                    </span>
                  </div>
                  <div
                    className="active-gigs"
                    style={{
                      display: this.state.showPausedGigs ? "none" : "block"
                    }}
                  >
                    <div className="gig">
                      {this.state.ProfileGigs.map(gig => {
                        if (gig.GigStatus) {
                          return (
                            <OneService
                              key={Math.random()}
                              title={gig.Overview.GigTitle}
                              profileId={gig.ProfileId}
                              image={`${API_URI}/${gig.Gallery.Images.split(
                                " "
                              ).join("%20")}`}
                              price={gig.Pricing.Price}
                              love={gig.Love}
                              active={true}
                              seriveId={gig._id}
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  </div>
                  <div
                    className="active-gigs non-active-gigs"
                    style={{
                      display: this.state.showPausedGigs ? "block" : "none"
                    }}
                  >
                    <div className="gig">
                      {this.state.ProfileGigs.map(gig => {
                        if (!gig.GigStatus) {
                          return (
                            <OneService
                              key={Math.random()}
                              profileId={gig.ProfileId}
                              title={gig.Overview.GigTitle}
                              image={`${API_URI}/${gig.Gallery.Images.split(
                                " "
                              ).join("%20")}`}
                              price={gig.Pricing.Price}
                              love={gig.Love}
                              active={false}
                              seriveId={gig._id}
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
        </div>
        <Footer />
      </Fragment>
    );
  }

  createGig = () => {
    this.props.history.push("/create_gig");
  };

  showPaused = async () => {
    this.setState({
      showPausedGigs: true,
      activeClass2: "activate_switcher",
      activeClass1: null
    });
    this.props.userGigs(localStorage.ProfileId);
  };

  showAvailable = async () => {
    this.setState({
      showPausedGigs: false,
      activeClass1: "activate_switcher",
      activeClass2: null
    });
    this.props.userGigs(localStorage.ProfileId);
  };
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
)(Profile);
