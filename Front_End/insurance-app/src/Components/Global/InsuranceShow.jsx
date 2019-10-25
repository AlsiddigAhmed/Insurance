import React, { Component, Fragment } from "react";
import InsurancePackage from "./PackageShow";
import { insuranceSubscripe } from "../../Redux/Actions/Insurance";

import "../../Styles/insuranceShow.css";
import { connect } from "react-redux";
class InsuranceShow extends Component {
  constructor() {
    super();
    this.state = {
      isClosed: false,
      package: []
    };
  }

  componentWillMount() {
    if (localStorage.popupStatus === "true") {
      setTimeout(() => {
        this.setState({ isClosed: false });
      }, 3000);
    } else {
      this.setState({ isClosed: true });
    }
  }

  closePopup = () => {
    this.setState({ isClosed: true });
    localStorage.popupStatus = false;
  };

  render() {
    return (
      <Fragment>
        <div
          style={{ display: this.state.isClosed ? "none" : "block" }}
          className="i-show"
        >
          <div className="popup-show">
            <div className="close-popup-show" onClick={this.closePopup}>
              <span className="fa fa-close" />
            </div>
            <div className="packages-container">
              <div>
                <h3 style={{ fontFamily: "Cairo" }}>
                  احصل الان على احد باقات التأمين المتاحة
                  <br /> ثم قم بتلقي الخدمات مجانا!
                </h3>
              </div>
              <br />
              <div className="packages-show">
                {this.state.package.map(pkg => {
                  return (
                    <InsurancePackage
                      Profile={this.state.ProfileInfo}
                      key={Math.random()}
                      favorite={pkg.Favorite}
                      package={pkg}
                      purchase={this.purchaseAndRedirect}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  purchaseAndRedirect = (id, packageId) => {
    this.props.insuranceSubscripe(id, packageId);
    setTimeout(() => {
      this.props.props.history.push(`/insurance/${localStorage.user}`);
    }, 2000);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.packages) {
      this.setState({ package: nextProps.packages });
    }
    if (nextProps.Profile.profile) {
      this.setState({ ProfileInfo: nextProps.Profile.profile.result });
    }
  }
}

const mapStateToProps = state => {
  return {
    Profile: state.profileData,
    newInsurance: state.insuranceSubscripe
  };
};

const mapActionsToState = {
  insuranceSubscripe
};

export default connect(
  mapStateToProps,
  mapActionsToState
)(InsuranceShow);
