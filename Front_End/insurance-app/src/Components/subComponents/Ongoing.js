import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class Ongoing extends Component {
  constructor() {
    super();
    this.state = {
      restTime: null
    };
  }
  componentDidMount() {
    let time = this.props.restTime.split(":");

    let days = time[0];
    let hours = time[1];
    let mins = time[2];

    if (days > 0 || hours > 0 || mins > 0) {
      this.setState({ restTime: `${days}:${hours}:${mins}` });
    } else {
      this.setState({ restTime: "00:00:00" });
    }
  }

  render() {
    return (
      <Fragment>
        <tr>
          <td>
            <Link to="/test">
              <div
                className="request_image"
                style={{ backgroundImage: `url(${this.props.serviceImage})` }}
              />
              <span>{this.props.title}</span>
            </Link>
          </td>
          <td>
            <Link to="/test">
              <span>{localStorage.user}</span>
            </Link>
          </td>
          <td title="Days/Monthes/Years">{this.props.reqDate}</td>
          <td>{this.props.price}</td>
          <td>{this.props.serviceTime}</td>
          <td title="days:hours:min:sec">
            {this.state.restTime === "00:00:00" ? (
              <span className="btn sendGig">تسليم الخدمة</span>
            ) : (
              this.state.restTime
            )}{" "}
          </td>
        </tr>
      </Fragment>
    );
  }
}

export default Ongoing;
