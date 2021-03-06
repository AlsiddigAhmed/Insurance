import React, { Component, Fragment } from "react";

import "../../Styles/create-gig.css";

class OverviewGigData extends Component {
  constructor() {
    super();
    this.state = {
      overviewHeight: 0,
      heightValue: 385,
      tagValue: "",
      validation: {
        title: false,
        cat: false,
        service: false,
        tags: false
      },
      Overview: {
        gigTitle: "",
        gigCat: "",
        serviceType: "",
        tags: []
      }
    };

    this.tags = [];
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

  checkDisplayStatus = () => {
    if (this.state.overviewHeight > 0) {
      this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  submitOverview = async () => {
    this.checkDisplayStatus();

    const { gigTitle, gigCat, serviceType } = this.refs;
    this.setState({
      Overview: {
        gigTitle: gigTitle.value,
        gigCat: gigCat.value,
        serviceType: serviceType.value,
        tags: this.tags
      }
    });

    setTimeout(() => {
      this.props.overviewData(this.state.Overview);
    }, 1000);
  };

  closeInput = () => {
    this.setState({ overviewHeight: 0, Overview: { gigTitle: "" } });
    this.tags = [];
  };
  render() {
    window.state = this.state.Overview.tags;

    return (
      <Fragment>
        <div className="forms" onClick={this.showOverviews}>
          <span>
            البيانات العامة
            <span style={{ fontSize: 14 }}>
              يمكنك هنا إضافة البيانات العامة للخدمة مثل إسم الخدمة ونوعها
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
            <textarea
              type="text"
              ref="gigTitle"
              id="gigtitle"
              placeholder="عنوان الخدمة"
              onChange={this.checkTitle}
              value={this.state.Overview.gigTitle}
            />
            <select type="text" ref="gigCat" onChange={this.checkCat}>
              <option value="unselected">صنف الخدمة</option>
              <option value="Mobile">تطبيقات موبايل</option>
              <option value="Web">تطبيقات ويب</option>
              <option value="Desktop">تطبيقات سطح مكتب</option>
              <option value="Software">برمجيات</option>
              <option value="API"> خدمات AIP</option>
              <option value="Other">اُخرى</option>
            </select>
            <select type="text" ref="serviceType" onChange={this.checkService}>
              <option value="unselected">نوع الخدمة</option>
              <option value="Front-End">تصميم واجهات</option>
              <option value="Back-End">تصميم خدمات Back-End</option>
              <option value="Software Engineering">هندسة برمجيات</option>
              <option value="Analyse">تحليل</option>
              <option value="Shell Scripting">برمجة نوات لينيكس</option>
              <option value="Operating Systems">انظمة تشغيل</option>
              <option value="IT Support">دعم تقني</option>
              <option value="Networking">شبكات</option>
              <option value="Other">اُخرى</option>
            </select>
            <input
              id="tag-input"
              style={{ minHeight: 40 }}
              type="text"
              ref="tags"
              placeholder="مفاتيح البحث"
              onChange={this.checkTag}
              value={this.state.tagValue}
            />
            <div className="tags_display">
              {this.tags.map(tag => {
                return (
                  <p className="tags_items" key={Math.random()}>
                    <i
                      style={{ transform: "rotate(-45deg)" }}
                      className="fa fa-plus"
                    />{" "}
                    {tag}
                  </p>
                );
              })}
            </div>

            <br />
            <button className="btn overview_btn " onClick={this.closeInput}>
              إلغاء
            </button>
            <button
              className="btn overview_btn cancel"
              onClick={this.submitOverview}
            >
              حفظ
            </button>
            <br />
          </div>
        </div>
      </Fragment>
    );
  }

  checkTag = e => {
    let tag = e.target.value;

    this.setState({ tagValue: tag });
    if (tag.includes("  ")) {
      this.tags.push(tag);
      this.setState({ tagValue: "", Overview: { tags: this.tags } });
    }
  };

  checkTitle = e => {
    let input = e.target;
    let title = e.target.value;
    this.setState({ Overview: { gigTitle: title } });
    setTimeout(() => {
      const { gigTitle } = this.state.Overview;
      if (gigTitle.startsWith(" ")) {
        input.style.border = "1px solid red";
        input.title = "لا يمكنك ان تبداء العنوان بمسافة";
      } else if (gigTitle.includes("  ")) {
        input.style.border = "1px solid red";
        input.title =
          "تأكد من المسافات بين الكلمات! لا يجب ان يكون هناك اكثر من مسافة واحدة بين الكلمات";
      } else {
        input.style.border = "0";
        input.title = gigTitle;
        this.setState({ validation: { title: true } });
      }
    }, 200);
    // setInterval(() => {
    //   // this.checkTitleInReal(input);
    // }, 100);
  };

  checkCat = e => {
    let cat = e.target.value;
    this.setState({ Overview: { gigCat: cat } });
    this.setState({
      validation: {
        cat: true
      }
    });
  };

  checkService = e => {
    let service = e.target.value;
    this.setState({ Overview: { serviceType: service } });
    this.setState({
      validation: {
        service: true
      }
    });
  };

  // checkTitleInReal = input => {

  // };
}

export default OverviewGigData;
