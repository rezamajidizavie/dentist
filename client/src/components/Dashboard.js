import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import ReserveList from "../components/ReservesList";
import Admin from "./Admin";

class Dashboard extends Component {
  state = {
    active: 0
  };

  tabHandler = id => {
    this.setState({
      active: id
    });
  };
  render() {
    return (
      <div className="container col-md-8 text-center mt-2 border rounded reserve-container-visible p-0">
        <h1>داشبورد </h1>
        <p>نام کاربر: {this.props.auth.user.name}</p>
        {this.props.auth.user.email === "m.m.zavie@gmail.com" ? (
          <div>
            <div class="alert alert-success" role="alert">
              مدیر سایت
            </div>
            <div className="btn-group w-100">
              {tabs.map((item, index) => (
                <button
                  key={index}
                  type="button"
                  className="btn btn-info"
                  onClick={this.tabHandler.bind(this, item.id)}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="text-center">{tabs[this.state.active].content}</div>
          </div>
        ) : (
          <div class="alert alert-danger" role="alert">
            در حال حاضر دسترسی ای برای این کاربر تعریف نشده است!
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(withRouter(Dashboard));

const tabs = [
  {
    id: 0,
    title: "لیست رزرو ها",
    content: <ReserveList />,
    active: false
  },
  {
    id: 1,
    title: "تعیین ظرفیت ها",
    content: <Admin />,
    active: false
  }
  // {
  //   id: 3,
  //   title: "مقاله جدید",
  //   active: true
  // }
];
