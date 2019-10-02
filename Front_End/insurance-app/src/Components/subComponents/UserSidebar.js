import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";
import Config from "../../Config/Config";

import "../ComponentsStyle/usersidebar.css";

class UserSidebar extends Component {
  constructor() {
    super();
    this.state = {
      Picture: null,
      user: null,
      ProfileId: null
    };
  }

  componentDidMount() {
    this.setState({ user: this.props.user });
    setTimeout(() => {
      this.getProfileInfo();
    }, 1000);
  }

  // componentWillMount() {
  // }

  getProfileInfo = async () => {
    Axios.get(`${Config.API_URI}/api/profile/${localStorage.id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    }).then(data => {
      const { ProfilePic, _id } = data.data.result;
      localStorage.ProfileId = _id;
      this.setState({ Picture: `${Config.API_URI}/${ProfilePic}` });
    });
  };

  render() {
    return (
      <Fragment>
        <div className="user-sidebar">
          <div className="ads">
            <div className="ads-text">
              <span>
                هل تريد الحصول على بعض المال؟ يمكنك الان توفير بعض الخدمات
                السهلة للحصول على المال! فقط قم بعمل خدمة ثم إترك الباقي علينا.
              </span>
            </div>
          </div>
          <div className="user_banner">
            <div
              className="pic"
              style={{ backgroundImage: `url(${this.state.Picture})` }}
            />
            <p>{this.state.user}</p>

            <Link to="/create_gig">
              <div className="use_profile btn" onClick={this.useProfile}>
                إنشاء خدمة الان
              </div>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  }
  useProfile = () => {
    const { props } = this.props;
    // console.log(props);
    props.history.push(`/profile/${localStorage.user}/${localStorage.id}`);
  };
}

export default UserSidebar;
