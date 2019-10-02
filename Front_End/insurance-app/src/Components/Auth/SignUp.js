// importing all required modules
import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Signup } from "../../Redux/Actions/Auth";
import axios from "axios";
import config from "../../Config/Config";
import "../../Styles/Login.css";
import "../../Styles/Signup.css";

// importing nested components for header and footer
import Navbar from "../subComponents/Navbar";
import Footer from "../subComponents/Footer";

// component class
class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      ConfirmPass: true,
      loading: false,
      nameError: true,
      databaseUsers: [],
      countries: []
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
            <div
              className="loader"
              style={{ display: this.state.loading ? "block" : "none" }}
            />
            <div className="margin-top-bottom">
              <div
                className="alert alert-danger"
                style={{
                  textAlign: "right",
                  display: this.state.nameError ? "none" : "block"
                }}
                role="alert"
              >
                هذا الاسم موجود مسبقا، جرب اسم اَخر
              </div>
              <div
                className="alert alert-warning"
                style={{
                  textAlign: "right",
                  display: this.state.ConfirmPass ? "none" : "block"
                }}
                role="alert"
              >
                تأكيد كلمة المرور لا يتطابق مع كلمة المرور السابقة{" "}
              </div>
              <h3 style={{ fontFamily: "Cairo" }}> تسجيل حساب جديد</h3>
              <div className="login-form">
                <form onSubmit={this.signupUser}>
                  <div className="" id="personal-info" style={{ display: "" }}>
                    <input
                      className="first-last-name "
                      type="text"
                      placeholder="الاسم الاول"
                      name="Firstname"
                    />

                    <input
                      className="first-last-name"
                      type="text"
                      placeholder="الاسم الثاني"
                      name="Lastname"
                    />
                    <input
                      name="Name"
                      type="text"
                      onChange={this.verifyName}
                      ref="Name"
                      placeholder=" اسم خاص بالموقع"
                    />
                    <div className="radio">
                      <label>
                        <input type="radio" name="gender" value="ذكر" /> ذكر
                        <span />
                      </label>
                      <label>
                        <input type="radio" name="gender" value="اُنثى" /> اُنثى
                        <span />
                      </label>
                    </div>
                    {/*  */}
                    <div className="birthday flex">
                      <p>تاريخ الميلاد</p>
                      <input name="day" type="number" placeholder="اليوم" />
                      <input name="month" type="number" placeholder="الشهر" />
                      <input name="year" type="number" placeholder="السنة" />
                    </div>
                    <button onClick={this.completeSignup}>التالي</button>

                    <div className="login-tools margin-top">
                      <Link to="/login">تسجيل الدخول</Link> -{" "}
                      <Link to="/forget-password">نسيت كلمة المرور</Link>
                    </div>
                  </div>

                  <div
                    className="contact-info"
                    id="contact-info"
                    style={{ display: "none" }}
                  >
                    <select
                      name="Country"
                      className="country-city first-last-name"
                    >
                      <option>اختر الدولة</option>
                      <option value="السودان">السودان</option>
                      <option value="مصر">مصر</option>
                      <option value="السعودية">السعودية</option>
                      <option value="العراق">العراق</option>
                      <option value="الامارات">الامارات</option>
                      <option value="قطر">قطر</option>
                      <option value="عمان">عمان</option>
                    </select>
                    <select
                      name="City"
                      className="country-city first-last-name"
                    >
                      <option>اختر المدينة</option>
                      <option value="الخرطوم">الخرطوم</option>
                      <option value="مسقط">مسقط</option>
                      <option value="القاهرة">القاهرة</option>
                      <option value="عمان">عمان</option>
                      <option value="طرابلس">طرابلس</option>
                      <option value="دبي">دبي</option>
                      <option value="ابوظبي">ابوظبي</option>
                      <option value="الرياض">الرياض</option>
                    </select>

                    <input name="Phone" type="tel" placeholder=" رقم الهاتف" />
                    <input
                      name="Email"
                      type="text"
                      placeholder="البريد الالكتروني"
                    />
                    <input
                      style={{ marginLeft: "1%" }}
                      className="first-last-name"
                      type="password"
                      placeholder="اختر كلمة مرور"
                      name="Password"
                    />
                    <input
                      className="first-last-name"
                      type="password"
                      placeholder="اعد كلمة المرور"
                      name="ConfirmPass"
                    />
                    <button className="first-last-name">
                      إنشاء حسابك الان
                    </button>
                    <div className="login-tools margin-top">
                      <Link to="/login">تسجيل الدخول</Link> -{" "}
                      <Link to="/forget-password">نسيت كلمة المرور</Link>
                    </div>
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

  componentDidMount = async () => {
    axios
      .get(config.API_URI + "/getallusernames")
      .then(res => {
        this.setState({ databaseUsers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  verifyName = async () => {
    const Name = this.refs.Name;

    for (let i of this.state.databaseUsers) {
      if (i === Name.value) {
        Name.style.border = "1px solid red";
        this.setState({ nameError: false });
      } else {
        this.setState({ nameError: true });
        Name.style.border = "0";
      }
    }
  };

  componentWillReceiveProps(newProps) {
    // console.log(newProps);
    if (newProps.UserSignup.signup.status === 200) {
      this.props.history.replace("/login");
    } else {
      this.setState({ loading: false, nameError: true });
    }
  }

  signupUser = e => {
    e.preventDefault();
    const { day, month, year } = e.target;
    const newUser = {
      Firstname: e.target.Firstname.value,
      Lastname: e.target.Lastname.value,
      Name: e.target.Name.value,
      Birthday: year.value + "-" + month.value + "-" + day.value,
      Gender: e.target.gender.value,
      Country: e.target.Country.value,
      City: e.target.City.value,
      Phone: e.target.Phone.value,
      Email: e.target.Email.value,
      Password: e.target.Password.value,
      ConfirmPass: e.target.ConfirmPass.value
    };

    if (newUser.Password === newUser.ConfirmPass) {
      // delete newUser.ConfirmPass;
      this.props.Signup(newUser);
      this.setState({ ConfirmPass: true, loading: true });
    } else {
      this.setState({ ConfirmPass: false, loading: false });
      // console.log("there is somethig wrong");
    }
  };

  completeSignup = e => {
    e.preventDefault();
    const personal = document.getElementById("personal-info");
    const contact = document.getElementById("contact-info");

    personal.parentElement.parentElement.classList.toggle("hide-personal-info");
    // personal.style.display = "none";
    setTimeout(() => {
      personal.style.display = "none";

      contact.style.display = "block";
      contact.parentElement.parentElement.classList.toggle("show-contact-info");
    }, 350);
  };
}

const mapStateToProps = state => {
  return {
    UserSignup: state.Signup
  };
};

const mapActionToProps = {
  Signup
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(SignUp);
