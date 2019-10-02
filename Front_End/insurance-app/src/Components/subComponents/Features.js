import React, { Fragment, Component } from "react";

import "../../Styles/features.css";

class Features extends Component {
  render() {
    return (
      <Fragment>
        <section className="col-12">
          <div className="container">
            <div
              className="row justify-content-center"
              style={{ background: "#4be0af1a", padding: 30 }}
            >
              <div className="col-lg-8 text-center">
                <div className="main_title">
                  {/* <p className="top_title">Features Specifications</p> */}
                  <h2>تخصيص باقات التأمين</h2>
                  <p>
                    يمكنك تخصيص حزم الباقة عن طريق اختيار الحزم التي تناسبك فقط
                    والحصول على سعر مخفض اكثر، قم باختيار الحزمة واختر الباقة ثم
                    قم بتحديد الاصناف ضمن الخدمة
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Features;
