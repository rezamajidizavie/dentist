import axios from "axios";
import * as moment from "jalali-moment";
import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import "../assets/css/calender.css";
import "../assets/css/reserve.css";
import DateComponent from "./DateComponent";

import {reserveUser} from "../actions/reserveActions";

class Reserve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      date: 0,
      spaces: [],
      dates: [],
      active: undefined,
      serverResponse: {},
      fetched: false,
      reserveClassName: "reserve-container-visible"
    };
  }

  componentDidMount() {
    for (let i = 0; i < 5; i++) {
      this.state.dates[i] =
        parseInt(
          moment()
            .locale("fa")
            .format("DD")
        ) + i;
    }

    axios.get("api/reserve/spaces").then(res => {
      const spaces = [];
      spaces[0] = res.data[0].firstDay;
      spaces[1] = res.data[0].secondDay;
      spaces[2] = res.data[0].thirdDay;
      spaces[3] = res.data[0].fourthDay;
      spaces[4] = res.data[0].fifthDay;
      this.setState({
        spaces
      });
    });
  }

  formSubmit = e => {
    e.preventDefault();
    const newReserve = {
      name: this.state.name,
      phone: this.state.phone,
      date: this.state.dates[this.state.active],
      dateIndex: this.state.active
    };
    this.props.reserveUser(newReserve);

    axios
      .post("/api/reserve", newReserve)
      .then(res => {
        this.setState({
          serverResponse: res.data,
          fetched: true
        });
        this.props.history.push("/success");
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleData = active => {
    this.setState({
      active
    });
  };

  handleSubmitButton = () => {
    if (this.state.active === undefined) {
      return (
        <input
          disabled
          className="btn btn-danger btn-block mt-3"
          value="لطفا یک روز را انتخاب نمایید"
        />
      );
    } else if (this.state.spaces[this.state.active] === 0) {
      return (
        <input
          disabled
          className="btn btn-danger btn-block mt-3"
          value="ظرفیت وجود ندارد"
        />
      );
    } else {
      return (
        <input className="btn btn-success w-100" type="submit" value="رزرو" />
      );
    }
  };

  render() {
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
                    {/* <DatePickerComponent /> */}
                    <DateComponent handlerFromParant={this.handleData} />
                  </div>
                </div>
              </div>
              {this.state.serverResponse.success}
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
                      شماره تماس
                    </span>
                  </div>
                  <div style={{width: "100%"}}>
                    <input
                      required
                      type="text"
                      name="phone"
                      className="form-control form-control-md reserve-input"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              {this.handleSubmitButton()}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    reserve: state.reserve
  };
};

export default connect(
  mapStateToProps,
  {reserveUser}
)(withRouter(Reserve));
