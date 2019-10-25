import React, { Component, Fragment } from "react";
import Axios from "axios";
import Config from "../../Config/Config";

import FormData from "form-data";

class ProfileOverview extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount = () => {
    if (this.props.Profile) {
      this.getProfileInfo();
    } else {
      setTimeout(() => {
        this.getProfileInfo();
      }, 500);
    }
  };

  getProfileInfo = async () => {
    setTimeout(() => {
      console.log(this.props.Profile.result);
    }, 4000);
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
      Balance: this.props.Profile.result.Profile.Balance,
      Status: this.props.Profile.result.Profile.Status,
      InsuranceStatus: this.props.Profile.result.Status ? (
        <span>متاح</span>
      ) : (
        <span>لا يوجد تأمين</span>
      )
    });
  };

  render = () => {
    return (
      <Fragment>
        <div className="child">
          <div style={{ minWidth: 80 }} className="online">
            <span>
              {this.state.Status ? <span>متاح</span> : <span>غير متاح</span>}{" "}
            </span>
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
                <i className="fa fa-shield" /> حالة التأمين
              </div>

              <div className="detials">
                <span> {this.state.InsuranceStatus}</span>
              </div>
            </div>

            <hr />
            <div className="info-wrapper">
              <div className="icon">
                <i className="fa fa-usd" /> الرصيد
              </div>

              <div className="detials">
                <span> ${this.state.Balance}</span>
              </div>
            </div>
            <hr />

            <div className="info-wrapper">
              <div className="icon">
                <i className="fa fa-briefcase" /> خارج العمل
              </div>

              <div className="detials">
                <label className="form-switch">
                  <input
                    type="checkbox"
                    onChange={() =>
                      this.setState({ Status: !this.state.Status })
                    }
                  />
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
    const { props } = this.props;
    props.history.push(
      `/profile/${this.state.Name}/?uid=${this.state.ProfileId}`
    );
  };
}

export default ProfileOverview;
