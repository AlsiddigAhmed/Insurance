import React, { Component, Fragment } from "react";
import InsurancePackage from "./PackageShow";
import "../../Styles/insuranceShow.css";
import { connect } from "react-redux";
import Ins from "../../Images/insurance1.png";
import Ins1 from "../../Images/insurance2.png";
import Ins2 from "../../Images/insurance3.png";
class InsuranceShow extends Component {
  constructor() {
    super();
    this.state = {
      isClosed: false,
      package: [
        {
          Price: 105,
          Includes: [
            "تطبيقات ويب",
            "تطبيقات هواتف",
            "دعم تقني",
            "تطبيقات حاسوب",
            "برامج API"
          ],
          Execludes: [],
          PackageName: "حزمة عادية",
          Details: `عند تنشيط هذه الباقة لايمكنك استخدام الخدمات الغير مضمنة بها عن طريق التأمين ولكن يمكنك شرائها مباشراً`,
          Time: 360,
          Favorite: true,
          Image: Ins2
        },
        {
          Price: 55,
          Includes: ["تطبيقات ويب", "تطبيقات هواتف", "دعم تقني", "برامج API"],
          Execludes: ["تطبيقات حاسوب"],
          PackageName: "حزمة عادية",
          Details: `عند تنشيط هذه الباقة لايمكنك استخدام الخدمات الغير مضمنة بها عن طريق التأمين ولكن يمكنك شرائها مباشراً`,
          Time: 180,
          Favorite: true,
          Image: Ins2
        },
        {
          Price: 29,
          Includes: ["تطبيقات ويب", "تطبيقات هواتف", "دعم تقني"],
          Execludes: ["تطبيقات حاسوب", "برامج API"],
          PackageName: "حزمة عادية",
          Details: `عند تنشيط هذه الباقة لايمكنك استخدام الخدمات الغير مضمنة بها عن طريق التأمين ولكن يمكنك شرائها مباشراً`,
          Time: 90,
          Favorite: false,
          Image: Ins1
        },
        {
          Price: 10,
          Includes: ["تطبيقات ويب", "دعم تقني"],
          Execludes: ["تطبيقات هواتف", "تطبيقات حاسوب", "برامج API"],
          PackageName: "حزمة عادية",
          Details: `عند تنشيط هذه الباقة لايمكنك استخدام الخدمات الغير مضمنة بها عن طريق التأمين ولكن يمكنك شرائها مباشراً`,
          Time: 30,
          Favorite: false,
          Image: Ins
        }
      ]
    };
  }

  componentWillMount() {
    // if (localStorage.popupStatus === "true") {
    //   setTimeout(() => {
    //     this.setState({ isClosed: false });
    //   }, 3000);
    // } else {
    //   this.setState({ isClosed: true });
    // }
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

  purchaseAndRedirect = () => {
    const { props } = this.props;
    props.history.replace("/insurance/" + localStorage.user);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.Profile.profile) {
      this.setState({ ProfileInfo: nextProps.Profile.profile.result });
    }
  }
}

const mapStateToProps = state => {
  return {
    Profile: state.profileData
  };
};

export default connect(
  mapStateToProps,
  null
)(InsuranceShow);
