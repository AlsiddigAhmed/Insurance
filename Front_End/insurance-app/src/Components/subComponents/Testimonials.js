import React, { Fragment, Component } from "react";

import "../../Styles/testimonials.css";
import profile from "../../Images/javascript.png";

class Testimonials extends Component {
  render() {
    return (
      <Fragment>
        <div className="site-section block-4 bg-light">
          <div className="container">
            <div className="row justify-content-center text-center mb-5">
              <div className="col-md-6" data-aos="fade">
                <h2>آراء الاخرين</h2>
              </div>
            </div>

            <div className="nonloop-block-4 owl-carousel" data-aos="fade">
              <div className="item col-md-6 mx-auto">
                <div className="block-38 text-center">
                  <div className="block-38-img">
                    <div className="block-38-header">
                      <img src={profile} alt="placeholder" />
                      <h3 className="block-38-heading">Mohammed Ali</h3>
                      <p className="block-38-subheading">مطور تطبيقات ويب</p>
                    </div>
                    <div className="block-38-body">
                      <p>
                        موقع تأمين الإلكترونيات هو موقع يساعد الكثيرين في الحصول
                        على وظائف حرة وتوفير المال، ويسهل الموقع عملية التعامل
                        مع العميل حيث يوفر لك كل اليات التعامل واستلام الاموال
                        بسهولة وامان
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Testimonials;
