import React, { Component, Fragment } from "react";
import Config from "../../Config/Config";

class InsurancePackage extends Component {
  constructor() {
    super();
    this.state = {
      Time: "",
      openBilling: false,
      ProfileBalance: 0
    };
    this.styles = { fontSize: 19, color: "gray" };
  }

  componentWillMount() {
    if (this.props.package.Time <= 31) {
      this.setState({ Time: "شهر واحد" });
    } else if (this.props.package.Time >= 31 && this.props.package.Time <= 90) {
      this.setState({ Time: "ثلاثة اشهر" });
    } else if (this.props.package.Time > 90 && this.props.package.Time <= 180) {
      this.setState({ Time: "ستة اشهر" });
    } else {
      this.setState({ Time: "سنة كاملة " });
    }
  }

  showBilling = () => {
    this.setState({ openBilling: !this.state.openBilling });
  };

  render() {
    return (
      <Fragment>
        <div
          className="insurance-packages"
          style={{
            borderColor: this.props.favorite ? "rgba(13, 101, 122, 0.726)" : ""
          }}
        >
          <div
            className="checkout-now"
            style={{ display: this.state.openBilling ? "block" : "none" }}
          >
            <div>
              <div>
                <div>
                  <span
                    style={{ color: "white", fontSize: 25 }}
                    className="fa fa-dollar"
                  >
                    {" "}
                    {this.props.package.Price}
                  </span>
                </div>
                <span style={{ color: "white" }}>اختر وسيلة الدفع</span>
              </div>
              <br />
              <span className="gtf1">
                يمكنك الدفع الان عن طريق الحساب الشخصي او محفظتك الإلكترونية
              </span>
            </div>
            <div className={`package-button `} onClick={this.checkoutLocaly}>
              {" "}
              عن طريق الحساب الشخصي
            </div>
            <p id="choose-to-pay">او</p>
            <div
              style={{ paddingTop: 1 }}
              className={`package-button package-favorite`}
            >
              استخدام PayPal <i className="fa fa-paypal" />
            </div>
          </div>
          <div className="get-package-now"></div>
          {this.props.favorite ? <div className="favorite"></div> : null}
          <div className="display-packages">
            <div
              className="packages-image"
              style={{
                backgroundImage: `url(${Config.API_URI}/${this.props.package.Image})`
              }}
            ></div>
            <h3>${this.props.package.Price}</h3>

            <h3 style={{ fontFamily: "Cairo" }}>{this.state.Time}</h3>
            {/* <p style={this.styles}>{this.props.package.PackageName}</p> */}
            {this.props.package.Includes.map(inc => {
              return (
                <p className="list-includes" key={Math.random()}>
                  <i className="fa fa-check" /> {inc}
                </p>
              );
            })}
            {this.props.package.Execludes.map(exe => {
              return (
                <p className="list-includes" key={Math.random()}>
                  <i className="fa fa-close" /> {exe}
                </p>
              );
            })}

            <p>{this.props.package.Details}</p>

            <div
              onClick={this.showBilling}
              className={`package-button ${
                this.props.package.Favorite ? "package-favorite" : ""
              }`}
            >
              الحصول على التأمين الان
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidMount = () => {
    if (this.props.Profile) {
      this.setState({
        ProfileBalance: this.props.Profile.Balance,
        ProfileId: this.props.Profile._id
      });
    }
  };

  checkoutLocaly = () => {
    this.handleRedirection();
  };
  handleRedirection = async () => {
    this.showBilling();
    await this.props.purchase(this.state.ProfileId, this.props.package._id);
  };
}

export default InsurancePackage;
