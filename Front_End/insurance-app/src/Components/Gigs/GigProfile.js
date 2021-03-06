import React, { Component, Fragment } from "react";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import { getFullProfile } from "../../Redux/Actions/Profile";

import "../../Styles/profile.css";

import "../../Styles/gig-profile.css";
import Config from "../../Config/Config";
import GigMakerInfo from "../subComponents/GigMakerInfo";

import { getOneGig } from "../../Redux/Actions/Gigs";
import { connect } from "react-redux";

const { API_URI } = Config;

class GigProfile extends Component {
  constructor() {
    super();
    this.state = {
      GigId: "",
      UserId: "",
      Overview: {
        GigTitle: "",
        GigCategory: "",
        ServiceType: ""
      },
      Pricing: {
        Price: 0,
        DeliveryTime: 0,
        Revision: 0
      },
      Images: "",
      DisLike: 0,
      Like: 0,
      Love: 0,
      Description: "",
      Profile: {},
      MyProfile: {}
    };
  }

  componentWillMount = async () => {
    let uri = this.props.location.search.split("&");

    let GigId = uri[0].split("=")[1];
    let UserId = uri[1].split("=")[1];

    this.setState({ GigId, UserId });
    this.props.getOneGig(GigId);
    await this.props.getFullProfile(localStorage.ProfileId);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.oneGig) {
      if (nextProps.oneGig.result) {
        const { result } = nextProps.oneGig.result;
        const { GigTitle, GigCategory, ServiceType } = result.Overview;
        const { Images } = result.Gallery;
        const { Description } = result.Description;
        const { Like, Love, DisLike } = result;
        const { Price, DeliveryTime, Revision } = result.Pricing;
        this.setState({
          MyProfile: nextProps.Profile ? nextProps.Profile.result : null,
          Profile: nextProps.oneGig.result.result.ProfileId,
          User: nextProps.oneGig.result.result.UserId,
          Overview: {
            GigTitle,
            GigCategory,
            ServiceType
          },
          Images,
          Description,
          Like,
          Love,
          DisLike,
          Pricing: {
            Price,
            DeliveryTime,
            Revision
          }
        });
      }
    }
  }

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="my-container">
            <div className="row ">
              <div className="col-12 col-sm-12">
                <div className="gig_profile">
                  <div className="gig_desc col-7">
                    <div className="gig_tools">
                      <span>
                        ({this.state.Love}+)
                        <i className="fa fa-heart-o" />{" "}
                      </span>
                      <span>
                        ({this.state.Like}+)
                        <i className="fa fa-thumbs-up" />
                      </span>
                      <span>
                        ({this.state.DisLike}+)
                        <i className="fa fa-thumbs-down" />
                      </span>
                    </div>
                    <div className="general_desc">
                      <div>
                        <span className="gig_title_special">
                          {this.state.Overview.GigTitle}
                        </span>
                      </div>
                      <div
                        className="gig_pic_special"
                        style={{
                          backgroundImage: `url(${API_URI}/${this.state.Images.split(
                            " "
                          ).join("%20")})`
                        }}
                      />
                    </div>
                    <div>
                      <div
                        style={{
                          margin: "30px 0 0px 0px",
                          fontSize: 22,
                          fontWeight: "bold"
                        }}
                      >
                        <span
                          style={{
                            fontSize: 20
                          }}
                        >
                          بيانات الخدمة
                        </span>
                      </div>
                      <div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            {" "}
                            نوع الخدمة:
                          </span>
                          <span> {this.state.Overview.ServiceType} </span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            صنف الخدمة:
                          </span>
                          <span> {this.state.Overview.GigCategory} </span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            عدد ايام الخدمة:
                          </span>
                          <span> {this.state.Pricing.DeliveryTime} ايام</span>
                        </div>
                        <div>
                          <span style={{ fontWeight: "bold" }}>
                            عدد المراجعات:
                          </span>
                          <span> {this.state.Pricing.Revision} مراجعات</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        style={{
                          margin: "30px 0 0px 0px",
                          fontSize: 22,
                          fontWeight: "bold"
                        }}
                      >
                        <span
                          style={{
                            fontSize: 20
                          }}
                        >
                          عن الخدمة المقدمة
                        </span>
                      </div>
                      <span>{this.state.Description}</span>
                    </div>
                    <div>
                      <div
                        style={{
                          margin: "30px 0 0px 0px",
                          fontSize: 22,
                          fontWeight: "bold"
                        }}
                      ></div>
                    </div>
                  </div>
                  <GigMakerInfo
                    oldProps={this.props}
                    info={{
                      gigId: this.state.GigId,
                      profile: this.state.Profile,
                      user: this.state.User,
                      gig: this.state.Pricing,
                      myProfile: this.state.MyProfile
                    }}
                  />
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
    oneGig: state.getOneGig,
    Profile: state.getAllProfileData.profile
  };
};

const mapActionsToState = {
  getOneGig,
  getFullProfile
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(GigProfile);
