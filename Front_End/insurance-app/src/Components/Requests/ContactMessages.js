import React, { Component, Fragment } from "react";

import PrivateNavbar from "../subComponents/PrivateNavbar";
import Footer from "../subComponents/Footer";
import user from "../../Images/javascript.png";

import "../../Styles/contactmessages.css";
import $ from "jquery";

class ContactMessages extends Component {
  constructor() {
    super();
    this.state = {
      msgs: [
        { msg: "عنوان الرسالة يكون على حسب الرسالة" },
        { msg: "عنوان الرسالة يكون على حسب الرسالة" },
        { msg: "عنوان الرسالة يكون على حسب الرسالة" }
      ]
    };
    this.args = [{ msg: "hello world" }];
  }
  render() {
    const element = (
      <div className="user_profile" title="رسالة غير مقروئة">
        <div className="user_info">
          <div>UserName</div>
          <span style={{ fontSize: 12 }}>
            السلام عليكم . هل يمكنك ان تطور تطبيق هواتف ذكية
          </span>
        </div>
        <div
          className="user_image"
          style={{ backgroundImage: `url(${user})` }}
        />
      </div>
    );

    return (
      <Fragment>
        <PrivateNavbar />
        <div className="col-md-12">
          <div className="chat_wrapper">
            <div className="inbox">
              {element}
              {element}
              {element}
              {element}
              {element}
              {element}
            </div>
            <div className="ongoing_chat">
              <div className="messages" id="messages">
                {this.state.msgs.map(element => {
                  return (
                    <div
                      className="msg_wrapper"
                      id="msg_wrapper"
                      key={Math.random()}
                    >
                      <div className="msg_tools">
                        <div
                          className="msg_user_pic"
                          style={{ backgroundImage: `url(${user})` }}
                        />
                      </div>
                      <div className="real_msg">
                        <div>
                          <div> {localStorage.user} </div>
                          <div> 2019/7/3 3:50 </div>
                        </div>
                        <span id="msg">{element.msg}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="chat_settings">
                <input type="text" ref="msg" placeholder="اكتب رسالة..." />
                <button onClick={this.sendMessage}>إرسال الان</button>
              </div>
            </div>
            {/* <div className="ongoing_chat_user">chatusers</div> */}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }

  sendMessage = () => {
    console.log(this.state.msgs);
    const messageText = this.refs.msg.value;
    if (messageText) {
      this.args.push({
        msg: `${messageText}`
      });
      this.setState({ msgs: this.args });
    } else {
    }

    this.scrollForMessages();
  };

  componentDidMount() {
    this.scrollForMessages();
  }

  scrollForMessages = () => {
    const msgWrapper = $(".msg_wrapper");
    const lastMsg = msgWrapper[msgWrapper.length - 1];
    const messages = $("#messages");

    if (this.state.msgs.length > 0) {
      messages.animate(
        {
          scrollTop: lastMsg.offsetTop
        },
        600
      );
    } else {
      return;
    }
  };
}

export default ContactMessages;
