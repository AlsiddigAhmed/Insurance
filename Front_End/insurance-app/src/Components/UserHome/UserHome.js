import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import OneService from "../subComponents/OneService";
import UserSidebar from "../subComponents/UserSidebar";
import Footer from "../subComponents/Footer";

import { connect } from "react-redux";
import { getBestGigsInfo } from "../../Redux/Actions/Gigs";

import "../../Styles/general-gigs.css";
import InsuranceShow from "../Global/InsuranceShow";

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      BestGigs: []
    };
  }
  componentDidMount() {
    this.props.getBestGigsInfo();
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.gigs.bestGigs) {
      this.setState({ BestGigs: nextProps.gigs.bestGigs.result });
    }
  }

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <InsuranceShow props={this.props} />
        <UserSidebar user={localStorage.user} props={this.props} />
        <div className="general-gigs-show">
          <div className="gigs-disc">
            <span style={{ fontSize: 18 }}>
              احصل الان على افضل الخدمات مع مساعدة لهيكلية تلقي الخدمة كاملاً
            </span>
            <br />
            <span>
              خدمات تطبيقات الويب كاملة ، يمكن للعميل الحصول عليها بكل سهولة
            </span>
          </div>
          {this.state.BestGigs.map(gigs => {
            if (
              gigs.Overview.GigCategory.toLowerCase() === "Web".toLowerCase()
            ) {
              if (gigs.GigStatus) {
                return (
                  <OneService
                    key={Math.random()}
                    profileId={gigs.ProfileId._id}
                    gigId={gigs._id}
                    title={gigs.Overview.GigTitle}
                    price={gigs.Pricing.Price}
                    love={gigs.Love}
                    serviceImage={gigs.Gallery.Images}
                    userImage={gigs.ProfileId.ProfilePic}
                    user={gigs.UserId.Name}
                  />
                );
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}
          <div className="show-more btn">
            <Link to="/test">
              {" "}
              <span>عرض المزيد</span>
            </Link>
          </div>
        </div>
        <div className="general-gigs-show">
          <div className="gigs-disc">
            <span style={{ fontSize: 18 }}>
              احصل الان على افضل الخدمات مع مساعدة لهيكلية تلقي الخدمة كاملاً
            </span>
            <br />
            <span>
              خدمات تطبيقات الويب كاملة ، يمكن للعميل الحصول عليها بكل سهولة
            </span>
          </div>
          {this.state.BestGigs.map(gigs => {
            if (
              gigs.Overview.GigCategory.toLowerCase() === "mobile".toLowerCase()
            ) {
              if (gigs.GigStatus) {
                return (
                  <OneService
                    key={Math.random()}
                    profileId={gigs.ProfileId._id}
                    gigId={gigs._id}
                    title={gigs.Overview.GigTitle}
                    price={gigs.Pricing.Price}
                    love={gigs.Love}
                    serviceImage={gigs.Gallery.Images}
                    userImage={gigs.ProfileId.ProfilePic}
                    user={gigs.UserId.Name}
                  />
                );
              } else {
                return null;
              }
            } else {
              return null;
            }
          })}

          <div className="show-more btn">
            <Link to="/test">
              {" "}
              <span>عرض المزيد</span>
            </Link>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    gigs: state.getBestGigsInfo
  };
};
const mapActionsToState = {
  getBestGigsInfo
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(UserHome);
