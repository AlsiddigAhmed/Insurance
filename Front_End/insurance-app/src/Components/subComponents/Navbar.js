import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../Styles/header.css";

class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <header className="header_area navbar_fixed">
          <div className="main_menu">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <button className="navbar-toggler" type="button">
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <ul className="nav navbar-nav menu_nav justify-content-center">
                    <li className="nav-item">
                      <span className="nav-link">مساعدة</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">تقييم الخدمات</span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link">باقات التأمين</span>
                    </li>
                    <li className="nav-item ">
                      <span className="nav-link">التأمين</span>
                    </li>
                    <li className="nav-item ">
                      <span className="nav-link">العروض & الخدمات</span>
                    </li>

                    <li className="nav-item active">
                      <span className="nav-link">الرئيسية</span>
                    </li>
                  </ul>
                  <ul className="navbar-nav ">
                    <li
                      className="nav-item "
                      style={{ width: 150, paddingRight: 30 }}
                    >
                      <Link to="/login" className="nav-link">
                        تسجيل دخول
                      </Link>
                    </li>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                      <Link
                        to="/signup"
                        style={{ fontFamily: "Cairo" }}
                        className="primary_btn text-uppercase"
                      >
                        إنضم الان
                      </Link>
                    </li>
                  </ul>
                  {/* */}
                </div>
              </div>
            </nav>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default Navbar;
