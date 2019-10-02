import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Login.css";
import Navbar from "../subComponents/Navbar";
import Footer from "../subComponents/Footer";
class ForgetPassword extends Component {
  constructor() {
    super();
    this.state = {
      confirm: false,
      sent: false,
      hideSubmit: false,
      checkClick: 0
    };
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="col-10 flex login-wrapper">
          {/*  */}
          <div className="col-4 left-side-login" />
          <div className="col-6 right-side-login text-center">
            <div className="margin-top-bottom">
              <div
                className="alert alert-success"
                style={{
                  textAlign: "right",
                  display: this.state.sent ? "block" : "none"
                }}
                role="alert"
              >
                تم ارسال رمز تأكيد في بريدك الالكتروني
              </div>
              <h3>استعادة كلمة السر</h3>
              <div className="login-form">
                <form onSubmit={this.restorePassword}>
                  <input
                    type="email"
                    name="email"
                    placeholder="ادخل بريدك الالكتروني"
                    required
                  />
                  <input
                    type="tel"
                    name="digit"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}"
                    maxLength="6"
                    style={{ display: this.state.confirm ? "inline" : "none" }}
                    placeholder="رمز الاسترجاع"
                    onChange={this.openSubmittion}
                  />
                  <button disabled={this.state.hideSubmit}>
                    {this.state.sent ? "تأكيد" : "التالي"}
                  </button>
                  <div className="login-tools margin-top">
                    <Link to="/login">تسجيل الدخول</Link> -{" "}
                    <Link to="/signup"> حساب جديد</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }

  restorePassword = e => {
    e.preventDefault();

    e.target.email.disabled = true;
    this.setState({ confirm: true, sent: true, hideSubmit: true });

    this.setState({ checkClick: +1 });
    // console.log(this.state.checkClick);
    if (this.state.checkClick >= 1) {
      this.props.history.replace(`/reset-password/${e.target.digit.value}`);
    }
  };

  openSubmittion = e => {
    let digit = e.target.value;
    // console.log(digit.length);
    if (digit.length > 0) {
      this.setState({ hideSubmit: false });
    } else {
      this.setState({ hideSubmit: true });
    }
  };
}

export default ForgetPassword;
