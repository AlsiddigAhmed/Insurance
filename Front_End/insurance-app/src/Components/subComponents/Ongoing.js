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
      downloadFiles: false,
      Height: 0,
      rating: null,
      temp_rating: 0
    };
  }
  componentDidMount() {
    this.setState({
      downloadFiles: this.props.files ? true : false
    });
  }

  rate = rating => {
    this.setState({
      rating: rating,
      temp_rating: rating
    });
  };

  star_over = rating => {
    this.setState({ temp_rating: this.state.rating, rating });
  };
  star_out = () => {
    this.setState({ rating: this.state.rating });
    // console.log(this.state.temp_rating);
  };

  render() {
    if (this.props.status) {
      let stars = [];

      for (let i = 0; i < 5; i++) {
        let klass = "star-rating__star";

        if (this.state.rating >= i && this.state.rating != null) {
          klass += " is-selected";
        }

        stars.push(
          <label
            className={klass}
            onClick={this.rate.bind(this, i)}
            onMouseOver={this.star_over.bind(this, i)}
            onMouseOut={this.star_out}
          >
            ★
          </label>
        );
      }
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
                <span>{this.props.makerInfo.UserId.Name}</span>
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
          <div
            style={{
              height: `${this.state.Height}px`,
              width: `262.9%`
            }}
            className="download_service"
          >
            <div
              className="tools"
              style={{
                display: this.state.Height >= 300 ? "block" : "none",
                overflow: "hidden"
              }}
            >
              <div
                style={{
                  width: 135,
                  height: 80,
                  right: 465,
                  marginBottom: 10,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundImage: `url(${API_URI}/${this.props.gigInfo.Gallery.Images.split(
                    " "
                  ).join("%20")})`
                }}
              />
              <span>{this.props.gigInfo.Overview.GigTitle}</span>
              <hr />
              <div>
                <span>هل اعجبتك الخدمة</span>
              </div>
              <div className="star-rating">{stars}</div>

              <div style={{ marginTop: 0 }} className="choises">
                <span onClick={() => this.setState({ Height: 0 })}>إلغاء</span>
                <a
                  download="folder"
                  href={`${Config.API_URI}/${this.props.files}`}
                >
                  <span>تحميل الخدمة</span>
                </a>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return null;
    }
  }

  downloadServiceFiles = () => {
    this.setState({
      Height: 370
    });
  };
}

export default Ongoing;
