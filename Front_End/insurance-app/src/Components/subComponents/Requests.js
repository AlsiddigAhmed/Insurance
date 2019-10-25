import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";
import Config from "../../Config/Config";
import { deleteRequest, acceptRequest } from "../../Redux/Actions/Requests";
import FormData from "form-data";
const { API_URI } = Config;

class Ongoing extends Component {
  constructor() {
    super();
    this.state = {
      isDeleted: false,
      isAccepted: false,
      Height: 0,
      file: null
    };
  }
  componentDidMount() {
    this.setState({
      isAccepted: this.props.status
    });
    setTimeout(() => {
      console.log(this.props);
    }, 5000);
  }

  render() {
    return (
      <Fragment>
        <tr style={{ display: this.state.isDeleted ? "none" : "" }}>
          <td>
            <Link to="/test">
              <div
                className="request_image"
                style={{
                  backgroundImage: `url(${API_URI}/${this.props.gigInfo.Gallery.Images.split(
                    " "
                  ).join("%20")})`
                }}
              />
              <span>{this.props.gigInfo.Overview.GigTitle}</span>
            </Link>
          </td>
          <td>
            <Link to="/test">
              <span>{this.props.profileInfo.UserId.Name}</span>
            </Link>
          </td>
          <td title="Monthes/Days/Years">
            {new Date(this.props.requestDate).toLocaleDateString()}
          </td>
          <td>${this.props.price}</td>
          <td>{this.props.gigInfo.Pricing.DeliveryTime} ايام</td>
          {this.state.isAccepted ? (
            <td>
              <span className="btn accept" onClick={this.UploadService}>
                إرسال الخدمة{" "}
              </span>
            </td>
          ) : (
            <td>
              <span className="btn accept" onClick={this.acceptRequest}>
                قبول{" "}
              </span>
              <span>/</span>
              <span className="btn decline" onClick={this.declineRequest}>
                {" "}
                رفض
              </span>
            </td>
          )}
        </tr>
        <div
          style={{
            height: `${this.state.Height}px`
          }}
          className="download_service"
        >
          <div
            className="tools"
            style={{ display: this.state.Height >= 300 ? "block" : "none" }}
          >
            <span>قم باختيار الخدمة</span>
            <input
              style={{ display: "none" }}
              ref={service => (this.service = service)}
              type="file"
              id="service"
              onChange={this.pickupService}
            />
            <div
              className="uploading_label"
              onClick={() => this.service.click()}
            >
              اختيار الملف
            </div>
            <div className="choises">
              <div>
                اسم الملف:{" "}
                <label>{this.state.file ? this.state.file.name : null}</label>
              </div>
              <span onClick={() => this.setState({ Height: 0 })}>إلغاء</span>
              <span onClick={this.uploadServiceFiles}>إرسال الخدمة</span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  pickupService = e => {
    const file = e.target.files[0];
    this.setState({ file });
  };

  UploadService = () => {
    this.setState({
      Height: 300
    });
  };

  uploadServiceFiles = () => {
    let formData = new FormData();
    formData.append("service", this.state.file);

    // console.log(this.state.file);
  };

  acceptRequest = () => {
    acceptRequest(this.props.requestId);
    this.setState({
      isAccepted: true
    });
  };
  declineRequest = () => {
    deleteRequest(this.props.requestId);
    this.setState({
      isDeleted: true
    });
  };
}

export default Ongoing;
