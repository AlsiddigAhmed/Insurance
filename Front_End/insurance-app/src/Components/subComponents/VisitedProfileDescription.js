import React, { Component, Fragment } from "react";
import Axios from "axios";
import Config from "../../Config/Config";
class VisitedProfileDescription extends Component {
  constructor() {
    super();
    this.state = {
      desc: {
        text: ""
      },
      language: { langArray: ["arabic", "english", "japanese"] },
      skill: {
        skillArray: ["javascript", "jquery", "react", "node"]
      },
      educ: false
    };
  }

  componentWillMount = async () => {
    this.getProfile();
  };

  getProfile = async () => {
    Axios.get(`${Config.API_URI}/api/profile/${localStorage.id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        const { result } = data.data;
        this.setState({
          desc: { text: result.Description }
        });
        // console.log(data.data.result.Languages);
        setTimeout(() => {
          // console.log(this.state.langs);
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };
  addDescDetails = () => {
    const description = this.refs.description.value;
    this.setState({ desc: { type: !this.state.desc.type, text: description } });
  };

  addLangDetails = () => {
    this.setState({
      language: {
        type: !this.state.language.type,
        langArray: this.state.language.langArray
      }
    });
  };

  addSkillDetails = () => {
    this.setState({
      skill: {
        type: !this.state.skill.type,
        skillArray: this.state.skill.skillArray
      }
    });
  };
  render() {
    return (
      <Fragment>
        <div className="info">
          <div className="info-wrapper">
            <div className="icon">
              <i className="fa fa-edit" /> نبذه قصيره
            </div>
          </div>
          <div className="desc-text text-right">{this.state.desc.text}</div>
          <hr />

          <div className="info-wrapper">
            <div className="icon">
              <i className="fa-icon fa fa-language" /> الللغات
            </div>
          </div>
          <br />
          <div className="lang-text text-right">
            {this.state.language.langArray.map(lang => {
              return (
                <span key={Math.random()}>
                  <i className="fa fa-check" /> {lang}
                </span>
              );
            })}
          </div>
          <hr />
          <div className="info-wrapper">
            <div className="icon">
              <i className="fa-icon fa fa-magic" /> المهارات
            </div>
          </div>
          <br />
          <div className="lang-text text-right">
            {this.state.skill.skillArray.map(skill => {
              return (
                <span key={Math.random()}>
                  <i className="fa fa-check" key={Math.random()} />

                  {" " + skill}
                </span>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default VisitedProfileDescription;
