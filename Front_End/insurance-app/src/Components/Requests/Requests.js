import React, { Component, Fragment } from "react";

import "../../Styles/requests.css";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import Ongoing from "../subComponents/Requests";
import { connect } from "react-redux";
import { getSellerRequest } from "../../Redux/Actions/Requests";

import service from "../../Images/service.png";

class Requests extends Component {
  constructor() {
    super();
    this.state = {
      Requests: null
    };
  }

  componentDidMount() {
    this.props.getSellerRequest(localStorage.ProfileId);
  }

  componentWillReceiveProps(nextProps) {
    // setTimeout(() => {
    //   // console.log(nextProps.requests.requests);
    // }, 5000);
    if (nextProps.requests.requests) {
      this.setState({
        Requests: nextProps.requests.requests.result
      });
    }
    setTimeout(() => {
      console.log(this.state.Requests);
    }, 1000);
  }

  render() {
    if (this.state.Requests) {
      return (
        <Fragment>
          <PrivateNavbar />
          <div className="wrapper">
            <div className="container">
              <div className="row ">
                <div className="col-12 col-sm-12">
                  <div className="request_container">
                    <table>
                      <tbody>
                        <tr>
                          <th>إسم الخدمة</th>
                          <th>إسم المستفيد</th>
                          <th>تاريخ الطلب</th>
                          <th>السعر</th>
                          <th>عدد ايام الخدمة</th>
                          <th>حالة الخدمة</th>
                        </tr>
                        {this.state.Requests.map((req, i) => {
                          return (
                            <Ongoing
                              key={i}
                              makerInfo={req.Maker}
                              profileInfo={req.Profile}
                              gigInfo={req.Service}
                              price={req.ServicePrice}
                              status={req.Status}
                              requestId={req._id}
                              requestDate={new Date(req.RequestDate).toString()}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </Fragment>
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    requests: state.getSellerRequests
  };
};

const mapActionsToProps = {
  getSellerRequest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Requests);
