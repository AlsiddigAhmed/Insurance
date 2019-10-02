import React, { Component, Fragment } from "react";

import OneService from "./OneService";

import javascript from "../ComponentsImages/javascript.png";
import service from "../ComponentsImages/service.png";
import service2 from "../ComponentsImages/home-banner.jpg";
import "../ComponentsStyle/work.css";

class Work extends Component {
  render() {
    return (
      <Fragment>
        <section className="section_gap features_area">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <div className="main_title">
                  {/* <p className="top_title">Exclusive Stunning Features</p> */}
                  <h2>العروض والخدمات</h2>
                  <p>
                    يمكنك عرض الخدمات التي يقدمها الافراد اصحاب الخبرات وذلك على
                    حسب نوع الخدمة المطلوبة والمقدمة ويمكنك ايضا البحث عن
                    الخدمات عن طريق البحث عن اسم الخدمة او الوصف
                  </p>
                </div>
              </div>
            </div>
            <br />
            {/*  */}
            <OneService
              title={"هنا يكون عنوان قصير يتم من خلاله وصف الخدمة المقدمة"}
              serviceImage={service2}
              love={46}
              price={150}
              userImage={javascript}
              user={"Subscriper"}
            />
            <OneService
              title={"هنا يكون عنوان قصير يتم من خلاله وصف الخدمة المقدمة"}
              serviceImage={service}
              love={46}
              price={150}
              userImage={javascript}
              user={"Subscriper"}
            />
            <OneService
              title={"هنا يكون عنوان قصير يتم من خلاله وصف الخدمة المقدمة"}
              serviceImage={service2}
              love={46}
              price={150}
              userImage={javascript}
              user={"Subscriper"}
            />
            <OneService
              title={"هنا يكون عنوان قصير يتم من خلاله وصف الخدمة المقدمة"}
              serviceImage={service}
              love={46}
              price={150}
              userImage={javascript}
              user={"Subscriper"}
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Work;
