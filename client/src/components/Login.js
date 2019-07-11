import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
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
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
    this.props.history.push("/admin");
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/admin");
    }
  }

  render() {
    return (
      <div className="col-md-8 m-auto">
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
                  email
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  required
                  name="email"
                  onChange={this.onChange}
                  type="text"
                  className="form-control form-control-md reserve-input"
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
                  password
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  required
                  type="text"
                  name="password"
                  className="form-control form-control-md reserve-input"
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <input className="btn btn-success w-100" type="submit" value="ثبت" />
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
)(withRouter(Login));
