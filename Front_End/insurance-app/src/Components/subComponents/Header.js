import React, { Component, Fragment } from "react";

import "../../Styles/header.css";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <section className="home_banner_area">
          <div className="banner_inner d-flex align-items-center">
            <div
              className="overlay bg-parallax"
              data-stellar-ratio="0.9"
              data-stellar-vertical-offset="0"
              data-background=""
            />
            <div className="container">
              <div className="banner_content text-center">
                <h3>أمن وتلقى الخدمات مجاناً، او ابحث عن خدمات مدفوعة</h3>
                <h5>
                  ابحث عن طريق كلمات مفتاحية: مثل تطبيقات ويب، تطبيقات اندرويد
                </h5>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Header;
