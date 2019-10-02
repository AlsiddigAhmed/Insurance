import React, { Component, Fragment } from "react";

import "./ComponentsStyle/requests.css";

import PrivateNavbar from "./subComponents/PrivateNavbar";
import Footer from "./subComponents/Footer";
import Ongoing from "./subComponents/Ongoing";

import service from "./ComponentsImages/service.png";

class Requests extends Component {
  render() {
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
                        <th>عدد الايام المتبقية</th>
                      </tr>
                      <Ongoing
                        serviceImage={service}
                        title={
                          "سوف اقوم بتطوير تطبيقات الويب باستخدام جافاسكريبت"
                        }
                        user={localStorage.user}
                        reqDate={"10/3/2019"}
                        price={"$35"}
                        serviceTime={"days 3"}
                        restTime={`${3}:${10}:${40}`}
                      />
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
  }
}

export default Requests;
