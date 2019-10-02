import React, { Component, Fragment } from "react";

import "../../Styles/create-gig.css";

class GellaryGigData extends Component {
  submitOverview = () => {
    if (this.state.overviewHeight > 0) {
      this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }

    const { gigTitle, gigCat, serviceType, tags } = this.refs;
    const overviewData = {
      gigTitle: gigTitle.value,
      gigCat: gigCat.value,
      serviceType: serviceType.value,
      tags: tags.value
    };

    this.props.overviewData(overviewData);
  };

  closeInput = () => {
    this.setState({ overviewHeight: 0 });
  };
  render() {
    return (
      <Fragment>
        <input
          style={{ display: "none" }}
          type="file"
          onChange={this.uploadGigImageOne}
          ref={imageNum1 => (this.imageNum1 = imageNum1)}
        />

        <div style={{ display: "flex" }}>
          <div id="image1" className="images_container">
            <div>
              <i
                className="fa fa-camera"
                onClick={() => this.imageNum1.click()}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }

  uploadGigImageOne = e => {
    let image = document.getElementById("image1");
    this.uploadHandler(e, image);
  };

  uploadHandler = (e, image) => {
    if (e.target.files && e.target.files[0]) {
      this.props.Image(e.target.files[0]);
      let obj = new FileReader();
      obj.onload = data => {
        image.style.backgroundImage = `url(${data.target.result})`;
        image.style.backgroundPosition = "center";
        image.style.backgroundSize = "cover";
      };
      obj.readAsDataURL(e.target.files[0]);
    }
  };
}

export default GellaryGigData;
