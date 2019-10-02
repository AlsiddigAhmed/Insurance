import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

class OnePackage extends Component {
  render() {
    return (
      <Fragment>
        <div className="package-price">
          <div className="price-title text-center">
            <span style={{ fontSize: 22 }}> حزمة كاملة لشهر</span>
            <span style={{ display: "block", fontSize: 20 }}>$80</span>
          </div>
          <div className="package">
            <div className="package-includes">
              <div className="package_includes">
                <i
                  className="fa fa-check"
                  style={{ color: "#5ac398", fontSize: 17 }}
                />
                <span> تأمين هواتف ذكية </span>
              </div>
              <div className="package_includes">
                <i
                  className="fa fa-check"
                  style={{ color: "#5ac398", fontSize: 17 }}
                />
                <span> تأمين منازل ذكية </span>
              </div>
              <div className="package_includes">
                <i
                  className="fa fa-check"
                  style={{ color: "#5ac398", fontSize: 17 }}
                />
                <span> تأمين اجهزة حواسيب </span>
              </div>
              <div className="package_includes">
                <i
                  className="fa fa-close"
                  style={{ color: "#5ac398", fontSize: 17 }}
                />
                <span> تأمين برامج إلكترونية </span>
              </div>
              <div className="package_includes">
                <i
                  className="fa fa-close"
                  style={{ color: "#5ac398", fontSize: 17 }}
                />
                <span> تأمين مواقع </span>
              </div>
            </div>
            <div>
              <span>
                يجب ان يكون هنا وصف كامل للخدمة التي تقدم عن طريق باقة التأمين
                المحددة
              </span>
            </div>
          </div>
          <div className="get-package">
            <Link to="/helo">
              <div className="apply ">
                <span>احصل على الحزمة الان</span>
              </div>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default OnePackage;
