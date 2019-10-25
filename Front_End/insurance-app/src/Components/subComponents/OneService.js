import React, { Component, Fragment } from "react";

import { Link } from "react-router-dom";
import Config from "../../Config/Config";

import "../../Styles/work.css";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      love: false,
      rate: false,
      isloved: null,
      price: null,
      user: null,
      title: null,
      userImage: null,
      serviceImage: null
    };
  }

  componentDidMount = () => {
    this.setState({
      user: this.props.user,
      price: this.props.price,
      isloved: this.props.love,
      title: this.props.title,
      userImage: this.props.userImage,
      serviceImage: this.props.serviceImage
    });
  };

  render() {
    return (
      <Fragment>
        <div className="Work row align-items-center">
          <div className="service">
            <div className="image">
              <div
                className="pic_container"
                style={{
                  backgroundImage: `url(${
                    Config.API_URI
                  }/${this.props.serviceImage.split(" ").join("%20")})`
                }}
              />
            </div>
            <div className="service-desc">
              <div className="user-info">
                <Link to="test">
                  <div className="user-img">
                    <div
                      className="user_pic_container"
                      style={{
                        backgroundImage: `url(${Config.API_URI}/${this.props.userImage})`
                      }}
                    />
                  </div>

                  <span>{this.state.user}</span>
                </Link>
              </div>
              <Link
                to={`/gig_profile/?gig_id=${this.props.gigId}&profile_id=${this.props.profileId}`}
              >
                <span className="p-title">{this.state.title}</span>
              </Link>
              <div className="price-rate">
                <div className="price_container">
                  <span>${this.state.price} </span>
                  <span> سعر الخدمة</span>
                </div>
                <div
                  className="gig_tool_settings"
                  title="هل انت معجب بهذه الخدمة؟"
                  onClick={this.rateBanner}
                >
                  <span className="dot" />
                </div>
                <div className="gig_tools ">
                  <i
                    className={
                      this.state.love ? "fa fa-heart" : "fa fa-heart-o"
                    }
                    onClick={this.ilove}
                    style={{ color: this.state.love ? "#cc6355" : "" }}
                  />
                  <span>(+{this.state.isloved})</span>
                </div>
                <div
                  className="gig_tools gig_rating"
                  style={{ display: this.state.rate ? "block" : "none" }}
                >
                  <i className="fa fa-eye dislike" title="زيارة الخدمة" />
                  <i
                    className={`fa ${
                      this.state.love ? "fa-heart" : "fa-heart-o"
                    }`}
                    title="احببت الخدمة"
                    onClick={this.ilove}
                    style={{ color: this.state.love ? "#cc6355" : "" }}
                  />
                  <i className="fa fa-thumbs-up like" title="اعجبتني الخدمة" />
                  <i
                    className="fa fa-thumbs-down dislike"
                    title="لم تعجبني الخدمة"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  rateBanner = () => {
    this.setState({ rate: !this.state.rate });
  };

  ilove = () => {
    if (!this.state.love) {
      this.setState({
        love: !this.state.love,
        isloved: this.state.isloved + 1
      });
    } else {
      this.setState({
        love: !this.state.love,
        isloved: this.state.isloved - 1
      });
    }
  };
}

export default Work;
