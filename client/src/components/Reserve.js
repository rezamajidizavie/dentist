import axios from "axios";
import * as moment from "jalali-moment";
import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "../assets/css/calender.css";
import "../assets/css/reserve.css";
import DateComponent from "./DateComponent";

import {reserveUser} from "../actions/reserveActions";
import DatePickerComponent from "./utils/DatePickerComponent";

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      date: undefined,
      spaces: {
        eightToTen: 0,
        tenToTwelve: 0,
        twelveToTwo: 0,
        twoToFour: 0,
        fourToSix: 0,
        sixToEight: 0,
        noSpace: undefined
      },
      active: undefined,
      serverResponse: {},
      reserveClassName: "reserve-container-visible",
      value: undefined
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.setState({
        name: this.props.auth.user.name
      });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.setState({
        name: this.props.auth.user.name
      });
    }
  }

  formSubmit = e => {
    e.preventDefault();
  };

  onSubmit = hour => {
    const newReserve = {
      name: this.state.name,
      phone: this.state.phone,
      day: moment(this.state.value).format("YYYY/MM/DD"),
      hour
    };
    axios.post("/api/reserve", newReserve).then(res => {
      this.props.history.push({
        pathname: "/success",
        state: {detail: res.data}
      });
    });
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  render() {
    const {
      eightToTen,
      tenToTwelve,
      twelveToTwo,
      twoToFour,
      fourToSix,
      sixToEight
    } = this.state.spaces;
    return (
      <div className="container text-center">
        <div
          className={`col-md-10 col-sm-11 col-lg-6 m-auto ${
            this.state.reserveClassName
          }`}
        >
          <p className="display-3">رزرو نوبت</p>
          <p className="lead text-center">
            نوبت دندانپزشکی خود را آنلاین رزرو کنید
          </p>
          <p>
            تاریخ امروز :{" "}
            {moment()
              .locale("fa")
              .format("YYYY/MM/DD")}
          </p>
          <small>* نام، شماره تماس و تاریخ ویزیت را وارد نمایید</small>

          <div className="col-md-8 m-auto">
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <div className="input-group input-group-sm mt-3">
                  <div className="input-group-prepend" style={{width: "100%"}}>
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px"
                      }}
                    >
                      تاریخ
                    </span>
                  </div>
                  <div style={{width: "100%"}}>
                    <DatePickerComponent
                      value={this.state.value}
                      onChange={value => {
                        this.setState({
                          value
                        });
                        if (this.state.value) {
                          axios
                            .post("/api/reserve/getspace", {
                              date: moment(this.state.value).format(
                                "YYYY/MM/DD"
                              )
                            })
                            .then(res => {
                              if (res.data.length > 0) {
                                this.setState({
                                  spaces: res.data[0],
                                  noSpace: false
                                });
                              } else {
                                this.setState({spaces: {}, noSpace: true});
                              }
                            });
                        }
                      }}
                      min={moment().subtract(1, "days")}
                    />
                    {/* <DateComponent handlerFromParant={this.handleData} /> */}
                  </div>
                </div>
              </div>
              <div className="border rounded p-2">
                {this.state.noSpace === true ? (
                  <div className="alert alert-danger mb-0">
                    ظرفیتی وجود ندارد.
                  </div>
                ) : null}
                {eightToTen > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 08-10:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {eightToTen}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "eightToTen")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
                {tenToTwelve > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 10-12:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {tenToTwelve}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "tenToTwelve")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
                {twelveToTwo > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 12-14:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {twelveToTwo}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "twelveToTwo")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
                {twoToFour > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 14-16:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {twoToFour}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "twoToFour")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
                {fourToSix > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 16-18:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {fourToSix}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "fourToSix")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
                {sixToEight > 0 ? (
                  <h6 className="mb-0 border d-flex justify-content-center align-items-center">
                    <strong>تعداد ظرفیت ساعت 18-20:</strong>
                    <div
                      className="badge badge-success"
                      style={{fontSize: "15px"}}
                    >
                      {sixToEight}
                    </div>
                    <button
                      className="btn btn-success ml-3"
                      onClick={this.onSubmit.bind(this, "sixToEight")}
                    >
                      رزرو
                    </button>
                  </h6>
                ) : null}
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
                      value={this.state.name}
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
                      شماره تماس
                    </span>
                  </div>
                  <div style={{width: "100%"}}>
                    <input
                      required
                      type="text"
                      name="phone"
                      className="form-control form-control-md reserve-input text-center"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reserve: state.reserve,
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {reserveUser}
)(withRouter(Reserve));
