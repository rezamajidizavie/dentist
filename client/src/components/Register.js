import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import {withRouter} from "react-router-dom";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("/api/reserve/register", userData)
      .then(res => console.log(res.data));
    this.props.history.push("/dashboard");
  }
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
    return (
      <div className="col-lg-3 col-md-6 col-sm-6 m-auto reserve-container-visible">
        <h1 className="text-center mt-1">ثبت نام</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="input-group input-group-sm mt-3">
              <div className="input-group-prepend" style={{width: "100%"}}>
                <span
                  className="input-group-text reserve-input-label"
                  id="inputGroup-sizing-sm"
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                >
                  نام
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  required
                  name="name"
                  onChange={this.onChange}
                  type="text"
                  className="form-control form-control-md reserve-input text-center"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group input-group-sm mt-3">
              <div className="input-group-prepend" style={{width: "100%"}}>
                <span
                  className="input-group-text reserve-input-label"
                  id="inputGroup-sizing-sm"
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                >
                  ایمیل
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  required
                  name="email"
                  onChange={this.onChange}
                  type="text"
                  className="form-control form-control-md reserve-input text-center"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="input-group input-group-sm mt-3">
              <div className="input-group-prepend" style={{width: "100%"}}>
                <span
                  className="input-group-text reserve-input-label"
                  id="inputGroup-sizing-sm"
                  style={{
                    justifyContent: "center",
                    width: "100%",
                    borderRadius: "10px 10px 0px 0px"
                  }}
                >
                  پسورد
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  required
                  type="password"
                  name="password"
                  className="form-control form-control-md reserve-input text-center"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <input
            className="btn btn-success w-100 mb-1"
            type="submit"
            value="ثبت نام"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {loginUser}
)(withRouter(Register));
