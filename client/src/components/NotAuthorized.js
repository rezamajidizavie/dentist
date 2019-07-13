import React, {Component} from "react";
import unauthorized from "../assets/img/401.jpg";
import {connect} from "react-redux";
import {withRouter, Link} from "react-router-dom";

class NotAuthorized extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    console.log(this.props.auth);

    return (
      <div className="container reserve-container-visible text-center">
        <div className="col-md-8 text-center m-auto">
          <img
            src={unauthorized}
            alt=""
            style={{width: "250px", borderRadius: "50%"}}
            className="mb-3"
          />
          <p className="text-center">
            برای ورود به این صفحه نیاز به ورود به سیستم دارید، اگر مدیر سیستم
            هستید لاگین نمایید در غیر این صورت اجازه ورود به این صفحه را ندارید.
          </p>
          <Link to="/login" className="m-2">
            <button type="button" className="btn btn-info">
              ورود به سیستم
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(withRouter(NotAuthorized));
