import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";

class InsuranceTable extends Component {
  constructor() {
    super();
    this.state = {
      restTime: null,
      packageName: "",
      price: null,
      subscriptionDate: "",
      username: "",
      status: "",
      lifetime: "",
      user: ""
    };
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    this.setState({
      subscriptionDate: new Date(nextProps.DateOfBill).toLocaleDateString(),
      price: nextProps.Insurance.Price,
      lifetime: nextProps.Insurance.Time < 31 ? <span>شهر واحد</span> : null,
      status: nextProps.Status ? "مفعل" : null,
      packageName: nextProps.Insurance.PackageName,
      user: nextProps.Insurance.PackageName ? localStorage.user : null
    });
  }

  render() {
    return (
      <Fragment>
        <tr>
          <td>
            <span style={{ textAlign: "center" }}>
              {this.state.packageName}
            </span>
          </td>
          <td>
            <span>{this.state.user}</span>
          </td>
          <td title="Days/Monthes/Years">{this.state.subscriptionDate}</td>
          <td>{this.state.price}</td>
          <td>{this.state.lifetime} </td>
          <td title="days:hours:min:sec">{this.state.status}</td>
        </tr>
      </Fragment>
    );
  }
}

export default InsuranceTable;
