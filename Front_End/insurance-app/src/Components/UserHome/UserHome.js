import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import OneService from "../subComponents/OneService";
import UserSidebar from "../subComponents/UserSidebar";
import Footer from "../subComponents/Footer";

import { connect } from "react-redux";
import {
  getBestGigsInfo,
  getLatestMobileGigs,
  getLatestDesktopGigs,
  getLatestWebGigs,
  getLatestSoftwareGigs,
  getLatestApiGigs
} from "../../Redux/Actions/Gigs";
import { getPackages } from "../../Redux/Actions/Insurance";

import "../../Styles/general-gigs.css";
import InsuranceShow from "../Global/InsuranceShow";

class UserHome extends Component {
  constructor() {
    super();
    this.state = {
      BestGigs: [],
      packages: [],
      BestMobile: [],
      BestWeb: [],
      BestDesktop: [],
      BestSoftware: [],
      BestApi: []
    };
  }
  componentDidMount() {
    this.props.getBestGigsInfo();
    this.props.getPackages();
    this.props.getLatestMobileGigs();
    this.props.getLatestWebGigs();
    this.props.getLatestDesktopGigs();
    this.props.getLatestApiGigs();
    this.props.getLatestSoftwareGigs();
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (
      nextProps.latestMobile &&
      nextProps.latestWeb &&
      nextProps.latestDesktop &&
      nextProps.latestSoftware &&
      nextProps.latestApi
    ) {
      this.setState({
        BestMobile: nextProps.latestMobile.result,
        BestWeb: nextProps.latestWeb.result,
        BestDesktop: nextProps.latestDesktop.result,
        BestSoftware: nextProps.latestSoftware.result,
        BestApi: nextProps.latestApi.result
      });
    }
    if (nextProps.packages.packages) {
      this.setState({ packages: nextProps.packages.packages.result });
    }
    if (nextProps.gigs.bestGigs) {
      this.setState({ BestGigs: nextProps.gigs.bestGigs.result });
    }
  }

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <InsuranceShow props={this.props} packages={this.state.packages} />
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
          {this.state.BestMobile.map(gigs => {
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
          {this.state.BestWeb.map(gigs => {
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
          {this.state.BestDesktop.map(gigs => {
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
          {this.state.BestSoftware.map(gigs => {
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
          {this.state.BestApi.map(gigs => {
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
    gigs: state.getBestGigsInfo,
    packages: state.getPackages,
    latestMobile: state.getLatestMobileGigs.gigs,
    latestWeb: state.getLatestWebGigs.gigs,
    latestDesktop: state.getLatestDesktopGigs.gigs,
    latestSoftware: state.getLatestSoftwareGigs.gigs,
    latestApi: state.getLatestApiGigs.gigs
  };
};
const mapActionsToState = {
  getBestGigsInfo,
  getLatestSoftwareGigs,
  getPackages,
  getLatestMobileGigs,
  getLatestWebGigs,
  getLatestDesktopGigs,
  getLatestApiGigs
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(UserHome);
