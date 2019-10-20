import React, { Component, Fragment } from "react";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";

import service from "../../Images/service.png";
import InsuranceTable from "../subComponents/InsuranceTable";

import OnePackage from "../subComponents/OnePackage";
import "../../Styles/insuranceTable.css";

class Insurance extends Component {
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

                            <span>إسم حزمة التأمين</span>
                          </th>
                          <th>
                            <i className="fa fa-calendar" />
                            <span> تاريخ التأمين</span>
                          </th>
                          <th>إسم المستفيد</th>
                          <th>
                            <i className="fa fa-usd" />
                            <span> سعر الباقة</span>
                          </th>
                          <th>
                            <i className="fa fa-calendar" />
                            <span> عدد ايام الخدمة</span>
                          </th>
                          <th>
                            <i className="fa fa-shield" />
                            <span> حالة التأمين</span>
                          </th>
                        </tr>

                        <InsuranceTable
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
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Insurance;
