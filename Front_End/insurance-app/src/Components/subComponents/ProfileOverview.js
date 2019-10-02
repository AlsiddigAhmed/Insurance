import React, { Component, Fragment } from "react";
import Axios from "axios";
import Config from "../../Config/Config";

import FormData from "form-data";

class ProfileOverview extends Component {
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
    setTimeout(() => {
      this.getProfileInfo();
    }, 500);
  }

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
  getProfileInfo = async () => {
    let userInfo = await Axios.get(
      `${Config.API_URI}/api/profile/${this.state._id}`,
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

  render = () => {
    return (
      <Fragment>
        <div className="child">
          <div className="online">
            <span>نشط </span>
          </div>

          <input
            style={{ display: "none" }}
            type="file"
            onChange={this.uploadGigImage}
            ref={image => (this.image = image)}
          />

          <div className="profile-pic background_user">
            <div className="uploading_container">
              <i className="fa fa-camera" onClick={() => this.image.click()} />
            </div>
            <div
              style={{ backgroundImage: `url(${this.state.Picture})` }}
              id="image"
            />
          </div>

          <div className="name text-center">
            <h5>{this.state.Name}</h5>
            <p>{this.state.Email}</p>
          </div>

          <div className="btn text-center" onClick={this.showGeneralMode}>
            عرض الشكل العام
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

            <hr />

            <div className="info-wrapper">
              <div className="icon">
                <i className="fa fa-briefcase" /> خارج العمل
              </div>

              <div className="detials">
                <label className="form-switch">
                  <input type="checkbox" />
                  <i />
                </label>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  };

  uploadGigImage = e => {
    let image = document.getElementById("image");
    this.uploadHandler(e, image);
    this.postImage(e.target.files[0]);
  };

  uploadHandler = (e, image) => {
    if (e.target.files && e.target.files[0]) {
      let obj = new FileReader();
      obj.onload = data => {
        image.style.backgroundImage = `url(${data.target.result})`;
      };
      obj.readAsDataURL(e.target.files[0]);
    }
  };

  postImage = async image => {
    // console.log(image);
    let formData = new FormData({ maxDataSize: 413654545 });

    formData.append("image", image);
    formData.append("user", localStorage.user);

    await Axios.post(
      `${Config.API_URI}/api/postuserimage/${this.state.ProfileId}`,

      formData,
      {
        headers: {
          Authorization: `bearer ${localStorage.token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

    // console.log(sendImage);
  };

  showGeneralMode = () => {
    const { props, user } = this.props;
    props.history.push(`/profile/${user}/?uid=${this.state.ProfileId}`);
  };
}

export default ProfileOverview;
