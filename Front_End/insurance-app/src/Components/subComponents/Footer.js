import React, { Fragment, Component } from "react";
// import { Link } from "react-router-dom";
import image1 from "../../Images/logos_2.png";
import image2 from "../../Images/logos_3.png";
import image3 from "../../Images/logos_4.png";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer" style={{ direction: "ltr" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 footer_col">
                <div className="footer_column footer_contact">
                  <div className="logo_container">
                    <div className="logo">
                      <a href="project brand">آمان </a>
                    </div>
                  </div>
                  <div className="footer_title">Got Question? Call Us 24/7</div>
                  <div className="footer_phone">+24962722667</div>
                </div>
              </div>

              <div className="col-lg-2 offset-lg-2">
                <div className="footer_column">
                  <div className="footer_title">مساعدة</div>
                  <ul className="footer_list">
                    <li>
                      <a href="shortcut ico">خدمات سريعة</a>
                    </li>
                  </ul>
                  <div className="footer_subtitle">الاسئلة الشائعة</div>
                  <ul className="footer_list">
                    <li>
                      <a href="shortcut ico 2">عن التأمين</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer_column">
                  <div className="footer_subtitle">التأمين</div>
                  <ul className="footer_list ">
                    <li>
                      <a href="get insurance">الحصول على تأمين</a>
                    </li>
                    <li>
                      <a href="get service">تلقي الخدمات</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-2">
                <div className="footer_column">
                  <div className="footer_title">الخدمات</div>
                  <ul className="footer_list">
                    <li>
                      <a href="freelancing">اعمال حرة</a>
                    </li>
                    <li>
                      <a href="eInsurance">تأمين إلكترونيات</a>
                    </li>
                    <li>
                      <a href="Get Service">تلقي خدمات</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* copywrite */}
        <div className="copyright" style={{ direction: "rtl" }}>
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="copyright_container d-flex flex-sm-row flex-column align-items-center justify-content-start">
                  <div className="copyright_content">
                    كل الحقوق محفوظة 2019{" "}
                  </div>
                  <div className="logos ml-sm-auto">
                    <ul className="logos_list">
                      <li>
                        <img src={image1} alt="here is something" />
                      </li>
                      <li>
                        <img src={image2} alt="here is anothor thing" />
                      </li>
                      <li>
                        <img src={image3} alt="here is anothor thing 2" />
                      </li>
                    </ul>
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

export default Footer;
