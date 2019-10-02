import React, { Component, Fragment } from "react";

import Axios from "axios";
import Config from "../../Config/Config";

class ProfileDescription extends Component {
  constructor() {
    super();
    this.langs = [];
    this.skills = [];
    this.state = {
      profileInfo: { ProfileId: null },
      desc: { type: false, text: "" },
      language: { type: false },
      skill: { type: false },
      langs: [],
      skills: [],
      educ: false
    };
  }

  openDescDetails = () => {
    this.setState({ desc: { type: true } });
  };
  openAddLang = () => {
    this.setState({ language: { type: true } });
  };

  addSkillDetails = () => {
    this.setState({ skill: { type: !this.state.skill.type } });
  };

  addDescDetails = e => {
    const description = this.refs.description.value;
    if (description === "" || description[0] === " ") {
      this.refs.description.style.border = "1px solid red";
    } else {
      this.setState({
        desc: {
          type: false,
          text: description
        }
      });
    }
  };

  addNewSkills = e => {
    e.preventDefault();
    let level = this.refs.skillLevel.value;
    let skill = this.refs.skill.value;
    this.skills.push({ skill, level });
    this.setState({ skills: this.skills, skill: { type: false } });
  };

  addLangDetails = e => {
    e.preventDefault();

    let lang = this.refs.lang.value;
    let level = this.refs.langLevel.value;
    this.langs.push({ lang, level });
    this.setState({ langs: this.langs });
    this.setState({
      language: {
        type: false
      }
    });

    setTimeout(() => {
      this.submitLanguage();
    }, 1000);
  };

  render() {
    return (
      <Fragment>
        <div className="info">
          <div className="info-wrapper">
            <div className="icon">
              <i className="fa fa-edit" /> نبذه قصيره
            </div>

            <div className="detials" onClick={this.openDescDetails}>
              <i className="fa-icon fa fa-plus" /> إضافة
            </div>
          </div>
          <div className="desc-text text-right">
            <form onSubmit={this.submitDescription}>
              <textarea
                type="textarea"
                ref="description"
                maxLength="180"
                // value={this.state.desc.text || ""}
                placeholder="ادخل نبذة عن نفسك فيما لا يزيد عن 180 حرف"
                style={{
                  display: this.state.desc.type ? "block" : "none"
                }}
              />
              <br />
              <button
                style={{
                  display: this.state.desc.type ? "block" : "none"
                }}
                className="btn text-center"
              >
                إضافة
              </button>
            </form>
            {this.state.desc.text}
          </div>
          <hr />

          <div className="info-wrapper">
            <div className="icon">
              <i className="fa-icon fa fa-language" /> الللغات
            </div>

            <div className="detials" onClick={this.openAddLang}>
              <i className="fa fa-plus" /> اضافه
            </div>
          </div>
          <br />
          <div className="lang-text text-right">
            <div
              className="add-lang"
              style={{
                display: this.state.language.type ? "block" : "none"
              }}
            >
              <form onSubmit={this.addLangDetails}>
                <input type="text" ref="lang" placeholder="ادخل اسم اللغة" />
                <select ref="langLevel">
                  <option disabled>المستوى</option>
                  <option>مبتدىء</option>
                  <option>متوسط</option>
                  <option>خبير</option>
                </select>
                <br />
                <br />
                <button className="btn text-center">إضافة</button>
              </form>
            </div>

            {this.state.langs.map(lang => {
              return (
                <span key={Math.random()}>
                  <i className="fa fa-check" /> {lang.lang}
                </span>
              );
            })}
          </div>
          <hr />
          <div className="info-wrapper">
            <div className="icon">
              <i className="fa-icon fa fa-magic" /> المهارات
            </div>

            <div className="detials" onClick={this.addSkillDetails}>
              <i className="fa fa-plus" /> اضافه
            </div>
          </div>
          <br />
          <div className="lang-text text-right">
            <div
              className="add-lang"
              style={{
                display: this.state.skill.type ? "block" : "none"
              }}
            >
              <form onSubmit={this.addNewSkills}>
                <input ref="skill" type="text" placeholder="ادخل اسم المهارة" />
                <select ref="skillLevel">
                  <option disabled>المستوى</option>
                  <option>مبتدىء</option>
                  <option>متوسط</option>
                  <option>خبير</option>
                </select>
                <br />
                <br />
                <button className="btn text-center">إضافة</button>
              </form>
            </div>

            {this.state.skills.map(skill => {
              return (
                <span key={Math.random()}>
                  <i className="fa fa-check" />

                  {" " + skill.skill}
                </span>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
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
        for (let i of result.Languages) {
          console.log(i);
          this.langs.push({ lang: i.lang, level: i.level });
        }
        this.setState({
          profileInfo: { ProfileId: result._id },
          desc: { text: result.Description },
          langs: result.Languages
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

  submitDescription = async e => {
    e.preventDefault();
    this.addDescDetails();

    await Axios.put(
      `${Config.API_URI}/api/profile/${this.state.profileInfo.ProfileId}/sendprofiledesc`,
      {
        description: this.refs.description.value
      },
      {
        headers: { Authorization: `brearer ${localStorage.token}` }
      }
    );
  };
  submitLanguage = async () => {
    await Axios.put(
      `${Config.API_URI}/api/profile/${this.state.profileInfo.ProfileId}/sendLang`,
      {
        Languages: this.state.langs
      },
      {
        headers: { Authorization: `brearer ${localStorage.token}` }
      }
    );
  };
}

export default ProfileDescription;
