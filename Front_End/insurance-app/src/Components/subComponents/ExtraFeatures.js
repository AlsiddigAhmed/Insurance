import React, { Component, Fragment } from "react";

import image1 from "../../Images/f-img.png";
import "../../Styles/features.css";

class ExtraFeatures extends Component {
  render() {
    return (
      <Fragment>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="main_title">
                  {/* <p className="top_title">Exclusive Stunning Features</p> */}
                  <h2>الحصول على خدمات تأمين إلكتروني </h2>
                  <p>
                    يمكنك الحصول على تأمين إلكتروني يضمن لك سهولة الحصول على
                    الخدمات الإلكترونية ويوفر لك الكثير من المال وذلك حسب نوع
                    التأمين بحيث انك تتلقى الخدمات مجاناً ومن دون مقابل
                  </p>

                  <span>إشترك الان</span>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="left_features">
                  <img className="fluid" src={image1} alt="" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1">
                <div className="single_feature">
                  <div className="feature_head">
                    <span className="lnr lnr-screen" />
                    <h4>سهولة الحصول على الخدمات</h4>
                  </div>
                  <div className="feature_content">
                    <p>
                      يمكنك عن طريق باقات التأمين الحصول على خدمات مجانية سريعة
                      وبطريقة سهلة جدا عن طريق البحث عن نوع الخدمة او اسمها
                    </p>
                  </div>
                </div>
                <div className="single_feature">
                  <div className="feature_head">
                    <span className="lnr lnr-screen" />
                    <h4>باقات التأمين الإلكتروني</h4>
                  </div>
                  <div className="feature_content">
                    <p>
                      الان يمكنك الحصول على احد الباقات التي تناسبك في الموقع،
                      ومن خلالها يمكنك الحصول على الخدمات مجاناً، فقط اختر
                      الباقة التي تناسبك ثم اختر مستويات التأمين للحصول على سعر
                      مخفض .
                    </p>
                  </div>
                </div>
                <div className="single_feature">
                  <div className="feature_head">
                    <span className="lnr lnr-screen" />
                    <h4>طريقة تلقي الخدمات</h4>
                  </div>
                  <div className="feature_content">
                    <p>
                      يمكنك تلقي الخدمات بسهولة حيث يجب عليك فقط البحث عن اسم
                      الخدمة واختيار مقدم الخدمة الذي يناسبك ومن ثم يمكنك الحصول
                      على الخدمة من خلال الضغط لى زر واحد فقط
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ExtraFeatures;
