import React, { Component, Fragment } from "react";

import "../../Styles/requests.css";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import Ongoing from "../subComponents/Ongoing";
import { connect } from "react-redux";
import { getBuyerRequest } from "../../Redux/Actions/Requests";

class Ongoings extends Component {
  constructor() {
    super();
    this.state = {
      Requests: null
    };
  }

  componentDidMount() {
    this.props.getBuyerRequest(localStorage.ProfileId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.requests.requests) {
      this.setState({
        Requests: nextProps.requests.requests.result
      });
    }
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
                          <th>مقدم الخدمة</th>
                          <th>تاريخ القبول</th>
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
                              files={req.ServiceFile}
                              requestDate={new Date(req.AcceptDate).toString()}
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
    requests: state.getBuyerRequests
  };
};

const mapActionsToProps = {
  getBuyerRequest
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Ongoings);
