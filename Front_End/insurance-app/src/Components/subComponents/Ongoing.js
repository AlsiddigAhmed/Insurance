import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";
import Config from "../../Config/Config";
import { deleteRequest, acceptRequest } from "../../Redux/Actions/Requests";
const { API_URI } = Config;

class Ongoing extends Component {
  constructor() {
    super();
    this.state = {
      isDeleted: false,
      downloadFiles: false
    };
  }
  componentDidMount() {
    this.setState({
      downloadFiles: this.props.files ? true : false
    });
    setTimeout(() => {
      console.log(this.props);
    }, 5000);
  }

  render() {
    if (this.props.status) {
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
            {this.state.downloadFiles ? (
              <td>
                <span
                  className="btn accept"
                  onClick={this.downloadServiceFiles}
                >
                  قم بتحميل الخدمة{" "}
                </span>
              </td>
            ) : (
              <td>
                <span className="btn accept">لم يتم إرسال ملف</span>
              </td>
            )}
          </tr>
          <div className="download_service"></div>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  downloadServiceFiles = () => {
    alert("files");
  };
}

export default Ongoing;
