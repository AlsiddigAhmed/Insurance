import React, { Component, Fragment } from "react";
import Config from "../../Config/Config";
import { postRequest } from "../../Redux/Actions/Requests";
const { API_URI } = Config;
class GigMakerInfo extends Component {
  constructor() {
    super();
    this.state = {
      noInsurance: false,
      openPayment: false,
      isMe: true,
      loading: false,
      succeeded: false
    };
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.info.myProfile) {
      if (nextProps.info.myProfile.Profile) {
        this.setState({
          isMe: `${nextProps.info.myProfile.Profile._id}`.match(
            nextProps.info.profile._id
          )
            ? true
            : false
        });
      }
    }
  }

  render() {
    if (this.props.info) {
      return (
        <Fragment>
          <div className="gig_req col-5 row">
            <div className="col-12  parent">
              <div className="child">
                <div
                  style={{ display: this.state.openPayment ? "block" : "none" }}
                  className="get-gig-now"
                >
                  <div className="payment-window">
                    <div>
                      <div>
                        <div>
                          <span
                            style={{ color: "white", fontSize: 25 }}
                            className="fa fa-dollar"
                          >
                            {" "}
                            {this.props.info.gig.Price}
                          </span>
                        </div>

                        <span
                          style={{
                            color: "white",
                            display: this.state.loading ? "none" : "inline"
                          }}
                        >
                          اختر وسيلة الدفع
                        </span>
                        <span
                          style={{
                            color: "white",
                            display: !this.state.loading ? "none" : "inline"
                          }}
                        >
                          الرجاء الانتظار
                        </span>
                      </div>
                      <br />
                      <p
                        style={{
                          display: this.state.noInsurance ? "block" : "none"
                        }}
                        className="noInsurance alert-danger"
                      >
                        عفواً. ليس لديك باقة تأمين نشطة، لا يمكنك الدفع عن طريق
                        التأمين
                      </p>
                      <span className="gtf1">
                        يمكنك الدفع الان عن طريق باقة التأمين او محفظتك
                        الإلكترونية
                      </span>
                    </div>
                    <div
                      onClick={this.checkInsurance}
                      className={`package-button `}
                    >
                      {" "}
                      عن طريق التأمين
                    </div>
                    <br />
                    <p id="choose-to-pay">او</p>
                    <div className="package-button package-favorite">
                      استخدام PayPal <i className="fa fa-paypal" />
                    </div>
                  </div>
                  <div
                    style={{
                      display: this.state.loading ? "block" : "none"
                    }}
                    className="spinner"
                  >
                    <div className="dot1"></div>
                    <div className="dot2"></div>
                  </div>
                  <span
                    style={{
                      color: "#4be0af",
                      display: !this.state.succeeded ? "none" : "inline"
                    }}
                  >
                    تم طلب الخدمة بنجاح!
                  </span>
                </div>
                <div className="online" style={{ minWidth: 70 }}>
                  <span>غير نشط </span>
                </div>

                <div className="profile-pic">
                  <img
                    src={`${API_URI}/${this.props.info.profile.ProfilePic}`}
                    alt="profile background"
                    style={{ width: "200%" }}
                  />
                </div>

                <div className="name text-center">
                  <h5>
                    {this.props.info.user ? this.props.info.user.Name : null}
                  </h5>
                  <div style={{ marginBottom: 10, padding: 10 }}>
                    <span>{this.props.info.profile.Description}</span>
                  </div>
                </div>

                <div className="btn text-center" onClick={this.goToProfile}>
                  زيارة الصفحة
                </div>
                <hr />
                <div className="info">
                  <div className="info-wrapper">
                    <div className="icon">
                      <span>
                        <i className="fa fa-usd" />
                        <span> سعر الخدمة </span>
                      </span>
                    </div>
                    <div className="detials">
                      <span>${this.props.info.gig.Price}</span>
                    </div>
                  </div>

                  <div className="info-wrapper">
                    <div className="icon">
                      <span>
                        <i className="fa fa-clock-o" />
                        <span> زمن الخدمة </span>
                      </span>
                    </div>
                    <div className="detials">
                      <span> {this.props.info.gig.DeliveryTime} ايام</span>
                    </div>
                  </div>

                  {/*<div className="info-wrapper">
                    <div className="icon">
                      <span>
                        <i className="fa fa-shield" />
                        <span> حالة التأمين</span>
                      </span>
                    </div>
                    <div className="detials">
                      <span> مفعل</span>
                    </div>
                  </div> */}

                  <hr />
                  <div style={{ display: this.state.isMe ? "none" : "block" }}>
                    <div
                      onClick={this.getServiceNow}
                      className="btn text-center"
                      style={{ marginBottom: 5 }}
                    >
                      طلب الخدمة الان
                    </div>
                    <div className="btn text-center">
                      التواصل مع مقدم الخدمة
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  getServiceNow = () => {
    this.setState({
      openPayment: true
    });
  };
  checkInsurance = e => {
    if (this.props.info.myProfile.Status) {
      this.setState({
        loading: true
      });
      this.checkoutService();
      setTimeout(() => {
        this.setState({
          loading: false,
          succeeded: true
        });
        setTimeout(() => {
          this.setState({
            succeeded: false
          });
        }, 4000);
      }, 3000);
    } else {
      this.setState({
        noInsurance: true
      });
    }
  };

  checkoutService = () => {
    let data = {
      Makerid: this.props.info.profile._id,
      ProfileId: localStorage.ProfileId,
      ServiceId: this.props.info.gigId,
      Price: this.props.info.gig.Price
    };

    const { Makerid, ...RequestData } = data;

    // console.log(Makerid);
    // console.log(RequestData);
    postRequest(Makerid, RequestData);
  };

  goToProfile = () => {
    this.props.oldProps.history.push(
      `/profile/${this.props.info.user.Name}/?uid=${this.props.info.profile._id}`
    );
  };
}
export default GigMakerInfo;
