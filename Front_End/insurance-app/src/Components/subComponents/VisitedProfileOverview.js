import React, { Component, Fragment } from "react";
import Axios from "axios";
import Config from "../../Config/Config";

class VisitedProfileOverview extends Component {
  constructor() {
    super();
    this.state = {
      Name: "",
      Country: "",
      Email: "",
      _id: "",
      Picture: null,
      MemberSince: null,
      ProfileId: null
    };
  }

  componentWillMount() {
    this.getUserInfo();
    this.getProfileInfo();
  }

  getProfileInfo = async () => {
    let userInfo = await Axios.get(
      `${Config.API_URI}/api/profile/${localStorage.id}`,
      {
        headers: { Authorization: `bearer ${localStorage.token}` }
      }
    );

    const { _id, ProfilePic } = userInfo.data.result;

    this.setState({
      ProfileId: _id,
      Picture: `${Config.API_URI}/${ProfilePic}`
    });
  };

  getUserInfo = async () => {
    let userInfo = await Axios.get(
      `${Config.API_URI}/api/profile/overview/${this.props.user}`,
      {
        headers: { Authorization: `bearer ${localStorage.token}` }
      }
    );

    const { MemberSince, _id, Email, Country, Name } = userInfo.data.result;
    this.setState({
      MemberSince: `${MemberSince.split("-")[1]}  ${MemberSince.split("-")[0]}`,
      _id,
      Email,
      Country,
      Name
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
            <span>نشط </span>
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
