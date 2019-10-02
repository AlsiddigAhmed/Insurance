import React, { Fragment, Component } from "react";
import "./ComponentsStyle/Login.css";
import Navbar from "./subComponents/Navbar";
import Footer from "./subComponents/Footer";
class ResetPassword extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="col-10 flex login-wrapper">
          {/*  */}
          <div className="col-4 left-side-login" />
          <div className="col-6 right-side-login text-center">
            <div className="margin-top-bottom">
              <h3> كلمة مرور جديدة</h3>
              <div className="login-form">
                <form onSubmit={this.resetPassword}>
                  <input
                    type="password"
                    name="password"
                    placeholder="كلمة المرور"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder=" أعد كلمة المرور"
                    required
                  />
                  <button>التالي</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
  resetPassword = () => {
    this.props.history.replace("/login");
  };
}

export default ResetPassword;
