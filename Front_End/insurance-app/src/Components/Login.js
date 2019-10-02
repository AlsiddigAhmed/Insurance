import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import "./ComponentsStyle/Login.css";
import { Login } from "../Redux/Actions/Auth";

import Navbar from "./subComponents/Navbar";
import Footer from "./subComponents/Footer";

import { connect } from "react-redux";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      user: null,
      loginError: false
    };
  }

  componentWillReceiveProps = newProps => {
    // const { user } = newProps.UserLogin.user;
    if (newProps.UserLogin.user) {
      this.setState({ user: newProps.UserLogin.user });
      this.applyLogin();
    } else {
      this.setState({ loginError: true, loading: false });
    }
  };

  applyLogin = () => {
    setTimeout(() => {
      // console.log(this.state.user);
      if (this.state.user.user) {
        this.setState({ loading: false, loginError: false });
        this.props.history.replace(`/user/${this.state.user.user.Name}`);
      } else {
        this.setState({ loginError: true, loading: false });
      }
    }, 2000);
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <section className="col-10 flex login-wrapper">
          {/*  */}
          <div className="col-4 left-side-login" />
          <div className="col-6 right-side-login text-center">
            <div
              className="loader"
              style={{ display: this.state.loading ? "block" : "none" }}
            />
            <div className="margin-top">
              <div
                style={{
                  textAlign: "right",
                  fontFamily: "Arial",
                  display: this.state.loginError ? "block" : "none"
                }}
                className="alert alert-danger"
                role="alert"
              >
                هناك خطاء اثناء عملية تسجيل الدخول، تأكد من الاسم وكلمة السر
              </div>
              <span style={{ fontSize: 22 }}>تسجيل الدخول</span>
              <div className="login-form">
                <form onSubmit={this.loginUser}>
                  <i className="fa fa-user input-icons" />
                  <input
                    type="text"
                    name="Name"
                    placeholder="ادخل اسمك"
                    required={true}
                  />
                  <input
                    type="password"
                    name="Password"
                    placeholder="ادخل كلمة المرور"
                    required={true}
                  />
                  <i
                    className="fa fa-lock input-icons"
                    style={{ top: "35%", right: "12%" }}
                  />
                  <button>دخول</button>

                  <div className="login-tools margin-top">
                    <Link to="forget-password">هل نسيت كلمة السر؟</Link>
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

  loginUser = e => {
    e.preventDefault();
    const Name = e.target.Name.value;
    const Password = e.target.Password.value;

    this.setState({ loading: true });
    this.props.Login({ Name, Password });
  };
}

const mapStateToProps = state => {
  return {
    UserLogin: state.Login
  };
};

const mapActionToProps = {
  Login
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(UserLogin);
