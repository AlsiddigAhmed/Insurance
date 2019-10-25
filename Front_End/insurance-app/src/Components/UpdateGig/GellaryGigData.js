import React, { Component, Fragment } from "react";
import Config from "../../Config/Config.js";

import "../../Styles/create-gig.css";

class GellaryGigData extends Component {
  constructor() {
    super();
    this.state = {
      Image: ""
    };
  }
  submitOverview = () => {
    if (this.state.overviewHeight > 0) {
      this.setState({ overviewHeight: 0 });
    } else {
      this.setState({ overviewHeight: this.state.heightValue });
    }
  };

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  componentWillReceiveProps(nextProps) {
    if (nextProps.Gallery) {
      this.setState({
        Image: `${Config.API_URI}/${nextProps.Gallery.Images}`
      });
    }
  }

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
          <div
            style={{
              backgroundImage: `url(${this.state.Image.split(" ").join(
                "%20"
              )})`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
            id="image1"
            className="images_container"
          >
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
