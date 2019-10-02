import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class InsuranceTable extends Component {
  constructor() {
    super();
    this.state = {
      restTime: null
    };
  }

  render() {
    return (
      <Fragment>
        <tr>
          <td>
            <Link to="/test">
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
          <td title="days:hours:min:sec">اي شيء</td>
        </tr>
      </Fragment>
    );
  }
}

export default InsuranceTable;
