import React, { Component, Fragment } from "react";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";

import service from "../../Images/service.png";
import InsuranceTable from "../subComponents/InsuranceTable";
import { getUserInsurance } from "../../Redux/Actions/Insurance";
import { connect } from "react-redux";

import "../../Styles/insuranceTable.css";

class Insurance extends Component {
  constructor() {
    super();
    this.state = {
      Ins: {
        Insurane: {},
        Profile: {},
        Status: {},
        DateOfBill: {}
      }
    };
  }
  componentDidMount() {
    // alert(localStorage.ProfileId);
    this.props.getUserInsurance(localStorage.ProfileId);
  }

  render() {
    return (
      <Fragment>
        <PrivateNavbar />
        <div className="wrapper">
          <div className="container">
            <div className="row ">
              <div className="col-12 col-sm-12">
                <div className="insurance_container">
                  <span style={{ fontSize: 22, display: "block" }}>
                    حالة التأمين الجاري
                  </span>

                  <br />
                  <div style={{ marginBottom: 70 }}>
                    <table>
                      <tbody>
                        <tr>
                          <th>
                            <i className="fa fa-gear" />
                            <span> اسم الحزمة</span>
                          </th>
                          <th>
                            <i className="fa fa-user" />
                            <span> إسم المستفيد</span>
                          </th>
                          <th>
                            <i className="fa fa-calendar" />
                            <span> تاريخ الاشتراك</span>
                          </th>
                          <th>
                            <i className="fa fa-usd" />
                            <span> سعر الباقة</span>
                          </th>
                          <th>
                            <i className="fa fa-hourglass-2" />
                            <span> زمن الحزمة </span>
                          </th>
                          <th>
                            <i className="fa fa-shield" />
                            <span> حالة التأمين</span>
                          </th>
                        </tr>
                        {this.state.Ins && this.state.Ins.DateOfBill ? (
                          <InsuranceTable
                            Insurance={this.state.Ins.Insurane}
                            Profile={this.state.Ins.Profile}
                            Status={this.state.Ins.Status}
                            DateOfBill={this.state.Ins.DateOfBill}
                          />
                        ) : null}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.insurance.data) {
      this.setState({ Ins: nextProps.insurance.data.result });
    }
  }
}

const mapStateToProps = state => {
  return {
    insurance: state.getInsurance.insurance
  };
};

const mapActionsToProps = {
  getUserInsurance
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Insurance);
