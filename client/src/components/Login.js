import React, {Component} from "react";
import {connect} from "react-redux";
import {loginUser} from "../actions/authActions";
import {withRouter} from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
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
    if (nextProps.errors) {
      this.setState({errors: nextProps.errors});
    }
  }

  render() {
    return (
      <div className="col-lg-3 col-md-6 col-sm-6 m-auto reserve-container-visible">
        <h1 className="text-center mt-1">ورود</h1>
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
                  ایمیل
                </span>
              </div>
              <div style={{width: "100%"}}>
                <input
                  name="email"
                  onChange={this.onChange}
                  type="text"
                  className="form-control form-control-md reserve-input"
                />
              </div>
              {this.state.errors.email ? (
                <p className="invalid-feedback d-block text-center mb-0">
                  {this.state.errors.email}
                </p>
              ) : null}
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
                  type="password"
                  name="password"
                  className="form-control form-control-md reserve-input"
                  onChange={this.onChange}
                />
                {this.state.errors.password ? (
                  <p className="invalid-feedback d-block text-center mb-0">
                    {this.state.errors.password}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
          <input
            className="btn btn-success w-100 mb-1"
            type="submit"
            value="ثبت"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  {loginUser}
)(withRouter(Login));
