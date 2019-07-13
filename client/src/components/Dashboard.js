import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Dashboard extends Component {
  render() {
    return (
      <div className="container col-md-5 text-center mt-2 border rounded reserve-container-visible">
        <h1>داشبورد مدیریتی</h1>
        <p>نام مدیر: {this.props.auth.user.name}</p>
        {this.props.auth.user.email === "m.m.zavie@gmail.com" ? (
          <div className="m-2">
            <Link to="/reservelist" className="m-2">
              <button type="button" className="btn btn-info">
                لیست رزرو ها
              </button>
            </Link>
            <Link to="/admin" className="m-2">
              <button type="button" className="btn btn-info">
                تعیین ظرفیت
              </button>
            </Link>
          </div>
        ) : null}
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
