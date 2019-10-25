import React, { Component, Fragment } from "react";

import GellaryGigData from "./GellaryGigData";
import FormData from "form-data";

import { updateDesc } from "../../Redux/Actions/Gigs";

class DescriptionGigData extends Component {
  constructor() {
    super();
    this.state = {
      overviewHeight: 0,
      heightValue: 780,
      maxDesc: 1000,
      descLength: 0,
      Desc: "",
      Image: "",
      Gallery: {}
    };
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.Description) {
      this.setState({
        Gallery: nextProps.Gallery,
        Desc: nextProps.Description.Description,
        descLength: nextProps.Description.Description.length
      });
    }
  }

  componentDidMount() {
    if (this.props.status) {
      setTimeout(() => {
        this.showOverviews();
      }, this.props.openTime);
    }
  }

  showOverviews = () => {
    if (this.state.overviewHeight > 0) {
      // this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  submitDesc = async () => {
    const { Desc, Gallery, Image } = this.state;
    const { gigId } = this.props;
    const formData = new FormData();

    formData.append("desc", Desc);
    formData.append(
      "image",
      typeof Image === "object" ? Image : Gallery.Images
    );

    updateDesc(gigId, formData);

    this.cb();
  };

  cb = () => {
    if (this.state.overviewHeight > 0) {
      this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  closeInput = () => {
    this.setState({ overviewHeight: 0, Desc: "" });
  };

  getDescLength = () => {
    let gigDesc = this.refs.gigDesc.value;
    this.setState({ descLength: gigDesc.length, Desc: gigDesc });
  };

  handleImage = Image => {
    this.setState({ Image });
  };

  render() {
    return (
      <Fragment>
        <div className="forms" onClick={this.showOverviews}>
          <span>
            وصف الخدمة & الاسئلة الشائعة
            <span style={{ fontSize: 14 }}>
              هنا يمكنك إضافة وصف للخدمة + الاسئلة الشائعة حول خدمتك المقدمة
            </span>
          </span>
          <span onClick={this.closeInput}>
            <i
              className={"fa fa-plus"}
              style={{
                transform:
                  this.state.overviewHeight > 0
                    ? "rotate(315deg)"
                    : "rotate(0)",
                transition: "all ease 400ms",
                color: this.state.overviewHeight > 0 ? "red" : "#43c198"
              }}
            />
          </span>
          <div
            className="gig_overview"
            style={{ minHeight: this.state.overviewHeight }}
          >
            <div
              style={{
                paddingBottom: 30
              }}
            >
              <textarea
                type="text"
                minLength="600"
                maxLength="1000"
                ref="gigDesc"
                value={this.state.Desc}
                onChange={this.getDescLength}
                placeholder="وصف الخدمة"
                style={{ minHeight: 360 }}
              />
              <span
                style={{
                  fontSize: 13,
                  float: "left",
                  marginLeft: 35
                }}
              >
                {this.state.maxDesc}/{this.state.descLength}
              </span>
            </div>

            <GellaryGigData
              Gallery={this.state.Gallery}
              Image={this.handleImage}
            />

            <button className="btn overview_btn " onClick={this.closeInput}>
              إلغاء
            </button>
            <button
              className="btn overview_btn cancel"
              onClick={this.submitDesc}
            >
              حفظ ونشر الخدمة
            </button>
            <br />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DescriptionGigData;
