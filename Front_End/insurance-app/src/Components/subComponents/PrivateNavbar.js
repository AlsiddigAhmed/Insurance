import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import "../../Styles/header.css";
import "../../Styles/privatenavbar.css";

import { getProfile } from "../../Redux/Actions/Profile";
import { connect } from "react-redux";

import Config from "../../Config/Config";

class PrivateNavbar extends Component {
  constructor() {
    super();
    this.state = {
      settings: true,
      ProfileId: "",
      Picture: ""
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getProfile(localStorage.id);
    }, 500);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.profileInfo.profile) {
    //   const { result } = nextProps.profileInfo.profile;
    this.setState({
      ProfileId: nextProps.profileInfo.profile.result._id,
      Picture: `${Config.API_URI}/${nextProps.profileInfo.profile.result.ProfilePic}`
    });
    // }
  }
  openSettings = () => {
    const settings = document.getElementById("user-setting");

    if (this.state.settings) {
      this.setState({ settings: false });
      settings.classList.add("user-settings-open");
      settings.classList.remove("user-settings-close");
    } else {
      settings.classList.add("user-settings-close");
      this.setState({ settings: true });
      setTimeout(() => {
        settings.classList.remove("user-settings-open");
      }, 500);
    }
  };

  render() {
    return (
      <Fragment>
        <header className="header_area navbar_fixed">
          <div className="main_menu">
            <nav
              className="navbar navbar-expand-lg navbar-light"
              style={{ borderBottom: "1px solid #e4e2e2" }}
            >
              <div className="container" style={{ padding: 0 }}>
                <div
                  className="collapse navbar-collapse offset"
                  id="navbarSupportedContent"
                >
                  <h3 style={{ width: 250 }}>Freelancing</h3>
                  <ul className="nav navbar-nav menu_nav justify-content-center">
                    <div className="service-search">
                      <form>
                        <div>
                          <input
                            list="categorises"
                            type="text"
                            placeholder="ابحث"
                          />
                          <datalist id="categorises">
                            <option>تطبيقات ويب</option>
                            <option>تطبيقات اندرويد</option>
                            <option> تصميم واجهات</option>
                            <option> تعديل فيديوهات</option>
                            <option> تصميم صور</option>
                            <option>صوتيات</option>
                          </datalist>
                          <button>
                            <i className="fa fa-search" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </ul>
                  <ul className="navbar-nav ">
                    <Link to={"/insurance/" + localStorage.user}>
                      <li
                        className="nav-item "
                        style={{
                          paddingRight: 5,
                          color: "#215645"
                        }}
                      >
                        التأمين
                      </li>
                    </Link>
                    <Link to={"/Gig_management/" + localStorage.user}>
                      <li
                        className="nav-item "
                        style={{
                          width: 150,
                          paddingRight: 30,
                          color: "#215645"
                        }}
                      >
                        إدارة الخدمات
                      </li>
                    </Link>
                  </ul>
                  <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                      <div
                        className="profile-nav"
                        style={{
                          backgroundImage: `url(${this.state.Picture})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center"
                        }}
                        onClick={this.openSettings}
                      />
                    </li>
                    <div className="user-settings" id="user-setting">
                      <ul>
                        <Link
                          to={`/profile/${localStorage.user}/${localStorage.id}`}
                        >
                          <li>
                            <span> الصفحة الشخصية </span>
                            <i className="fa fa-user" />
                          </li>
                        </Link>
                        <Link to={`/requests/${localStorage.user}`}>
                          <li>
                            <span>الطلبات </span>
                            <i className="fa fa-paper-plane" />
                          </li>
                        </Link>
                        <Link to={`/inbox/${localStorage.user}`}>
                          <li>
                            <span> الرسائل </span>
                            <i className="fa fa-envelope" />
                          </li>
                        </Link>
                        <Link to={"/user/" + localStorage.user}>
                          <li>
                            <span>صفحة الخدمات </span>
                            <i className="fa fa-home" />
                          </li>
                        </Link>
                        <Link to={"/insurance/" + localStorage.user}>
                          <li>
                            <span>إدارة التأمين </span>
                            <i className="fa fa-home" />
                          </li>
                        </Link>
                        <Link to="/test">
                          <li>
                            <span>الضبط </span>
                            <i className="fa fa-gear" />
                          </li>
                        </Link>
                        <Link to="/test">
                          <li>
                            <span>مساعدة </span>
                            <i className="fa fa-question-circle" />
                          </li>
                        </Link>
                        <Link to="/login">
                          <li onClick={this.logout}>
                            <span>تسجيل خروج </span>
                            <i className="fa fa-sign-out" />
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </ul>
                  {/* */}
                </div>
              </div>
            </nav>
            <div className="cat-nav">
              <ul>
                <Link to="/test">
                  <li>تطبيقات ويب</li>
                </Link>
                <Link to="/test">
                  <li>تطبيقات اندرويد</li>
                </Link>
                <Link to="/test">
                  <li>تصميم واجهات</li>
                </Link>
                <Link to="/test">
                  <li>تعديل فيديوهات</li>
                </Link>
                <Link to="/test">
                  <li>تصميم صور</li>
                </Link>
                <Link to="/test">
                  <li>صوتيات</li>
                </Link>
              </ul>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }

  logout = () => {
    localStorage.clear();
  };
}

const mapStateToProps = state => {
  return {
    profileInfo: state.profileData
  };
};
const mapActionsToProps = {
  getProfile
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(PrivateNavbar);
