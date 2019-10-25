import React, { Component, Fragment } from "react";
import { updatePricing } from "../../Redux/Actions/Gigs";

import "../../Styles/create-gig.css";

class PricingGigData extends Component {
  constructor() {
    super();
    this.state = {
      overviewHeight: 0,
      heightValue: 180,
      GigDays: 0,
      GigReviews: 0,
      GigPrice: 0
    };

    this.days = [];
    this.reviews = [];
  }
  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.Pricing) {
      this.setState({
        GigDays: nextProps.Pricing.DeliveryTime,
        GigReviews: nextProps.Pricing.Revision,
        GigPrice: nextProps.Pricing.Price
      });
    }
  }

  componentDidMount() {
    if (this.props.status) {
      setTimeout(() => {
        this.showOverviews();
      }, this.props.openTime);
    }
    for (let i = 1; i < 11; i++) {
      this.days.push(i);
    }

    for (let i = 1; i < 10; i++) {
      this.reviews.push(i);
    }
  }

  showOverviews = () => {
    if (this.state.overviewHeight > 0) {
      // this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  sb = () => {
    if (this.state.overviewHeight > 0) {
      this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  submitPricing = async () => {
    const { GigDays, GigPrice, GigReviews } = this.state;
    const { gigId } = this.props;
    await updatePricing(gigId, { GigDays, GigPrice, GigReviews });
    this.sb();
  };

  closeInput = () => {
    this.setState({ overviewHeight: 0 });
  };
  render() {
    return (
      <Fragment>
        <div className="forms" onClick={this.showOverviews}>
          <span>
            بيانات اسعار الخدمة
            <span style={{ fontSize: 14 }}>
              هنا يمكنك إضافة اسعار الخدمة + بيانات عامة عن الخدمة
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
            <select
              type="number"
              value={this.state.GigDays}
              onChange={this.handleDays}
            >
              <option>عدد ايام الخدمة</option>
              {this.reviews.map(element => {
                return (
                  <option value={element} key={Math.random()}>
                    {element}
                  </option>
                );
              })}
            </select>
            <select
              type="number"
              onChange={this.handleReviews}
              value={this.state.GigReviews}
              style={{ width: "30%" }}
            >
              <option>عدد المراجعات</option>
              <option value="unlimited"> غير محدود </option>
              {this.days.map(element => {
                return (
                  <option value={element} key={Math.random()}>
                    {element}
                  </option>
                );
              })}
            </select>

            <input
              list="prices"
              placeholder="سعر الخدمة"
              onChange={this.handlePrice}
              value={this.state.GigPrice}
              style={{ width: "30%", padding: "11px 10px 11px 10px" }}
            />
            <datalist id="prices">
              <option>5</option>
              <option>500</option>
            </datalist>

            <br />
            <button className="btn overview_btn " onClick={this.closeInput}>
              إلغاء
            </button>
            <button
              className="btn overview_btn cancel"
              onClick={this.submitPricing}
            >
              حفظ
            </button>
            <br />
          </div>
        </div>
      </Fragment>
    );
  }

  handleDays = e => {
    let GigDays = e.target.value;
    this.setState({ GigDays });
  };
  handleReviews = e => {
    let GigReviews = e.target.value;
    this.setState({ GigReviews });
  };
  handlePrice = e => {
    let GigPrice = e.target.value;
    this.setState({ GigPrice });
  };
}

export default PricingGigData;
