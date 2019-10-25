import React, { Component, Fragment } from "react";
import Config from "../../Config/Config";

class VisitedProfileOverview extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    if (this.props.Profile) {
      this.getProfileInfo();
    } else {
      setTimeout(() => {
        this.getProfileInfo();
      }, 500);
    }
  }

  getProfileInfo = async () => {
    this.setState({
      MemberSince: `${
        this.props.Profile.result.Profile.UserId.MemberSince.split("-")[1]
      }  ${this.props.Profile.result.Profile.UserId.MemberSince.split("-")[0]}`,
      _id: this.props.Profile.result.Profile.UserId._id,
      Email: this.props.Profile.result.Profile.UserId.Email,
      Country: this.props.Profile.result.Profile.UserId.Country,
      Name: this.props.Profile.result.Profile.UserId.Name,
      ProfileId: this.props.Profile.result.Profile._id,
      Picture: `${Config.API_URI}/${this.props.Profile.result.Profile.ProfilePic}`,

      Status: this.props.Profile.result.Profile.Status
    });
  };

  gotoInbox = () => {
    const { props, userId } = this.props;
    props.history.push(`/inbox/${this.props.user}/?id=${userId}`);
  };

  render() {
    return (
      <Fragment>
        <div className="child">
          <div className="online">
            <span>
              {this.state.Status ? <span>متاح</span> : <span>غير متاح</span>}{" "}
            </span>
          </div>

          <div className="profile-pic">
            <div
              style={{ backgroundImage: `url(${this.state.Picture})` }}
              id="image"
            />
          </div>

          <div className="name text-center">
            <h5>{this.state.Name}</h5>
            <p>{this.state.Email}</p>
          </div>

          <div className="btn text-center" onClick={this.gotoInbox}>
            إرسال رسالة{" "}
          </div>
          <hr />
          <div className="info">
            <div className="info-wrapper">
              <div className="icon">
                <i className="fa fa-map-marker" /> الدوله
              </div>

              <div className="detials">
                <span>{this.state.Country}</span>
              </div>
            </div>

            <div className="info-wrapper">
              <div className="icon">
                <i className="fa fa-user" /> عضو منذ
              </div>

              <div className="detials">
                <span> {this.state.MemberSince}</span>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default VisitedProfileOverview;
