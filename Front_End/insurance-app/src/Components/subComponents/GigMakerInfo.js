import React, { Component, Fragment } from "react";
import Config from "../../Config/Config";
const { API_URI } = Config;
class GigMakerInfo extends Component {
  componentDidMount = () => {};

  render() {
    console.log(this.props.info);
    if (this.props.info) {
      return (
        <Fragment>
          <div className="gig_req col-5 row">
            <div className="col-12  parent">
              <div className="child">
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
                  <h5>{localStorage.user}</h5>
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
                      <span style={{ textDecoration: "line-through" }}>
                        {" "}
                        $250
                      </span>
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
                      <span> 15 ايام</span>
                    </div>
                  </div>

                  <div className="info-wrapper">
                    <div className="icon">
                      <span>
                        <i className="fa fa-shield" />
                        <span> حالة التأمين</span>
                      </span>
                    </div>
                    <div className="detials">
                      <span> مفعل</span>
                    </div>
                  </div>

                  <hr />

                  <div className="btn text-center" style={{ marginBottom: 5 }}>
                    طلب الخدمة الان
                  </div>
                  <div className="btn text-center">التواصل مع مقدم الخدمة</div>
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
  goToProfile = () => {
    this.props.oldProps.history.push(
      `/profile/${this.props.info.user.Name}/?uid=${this.props.info.profile._id}`
    );
  };
}
export default GigMakerInfo;
