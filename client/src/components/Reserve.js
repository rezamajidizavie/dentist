import React, { Component } from "react";
import "../assets/css/calender.css";
import "../assets/css/reserve.css";
import DatePickerComponent from "./utils/DatePickerComponent";
import Moment from "react-moment";
import * as moment from "jalali-moment";

class Reserve extends Component {
  render() {
    let persianDate = moment()
      .locale("fa")
      .format("YYYY/M/D");
    return (
      <div className="container text-center">
        <div className="col-md-6 m-auto reserve-container">
          <p className="display-3">رزرو نوبت</p>
          <p className="lead text-center">
            نوبت دندانپزشکی خود را آنلاین رزرو کنید
          </p>
          <small>* نام، شماره تماس و تاریخ ویزیت را وارد نمایید</small>

          <Moment locale="fa" format="YYYY/MM/DD">
            {persianDate}
          </Moment>

          <div className="col-md-8 m-auto">
            <form>
              <div className="form-group">
                <div className="input-group input-group-sm mt-3">
                  <div
                    className="input-group-prepend"
                    style={{ width: "100%" }}
                  >
                    <span
                      className="input-group-text"
                      id="inputGroup-sizing-sm"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "lightblue"
                      }}
                    >
                      تاریخ
                    </span>
                  </div>
                  <div style={{ width: "100%" }}>
                    <DatePickerComponent />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-sm mt-3">
                  <div
                    className="input-group-prepend"
                    style={{ width: "100%" }}
                  >
                    <span
                      className="input-group-text reserve-input-label"
                      id="inputGroup-sizing-sm"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "lightblue"
                      }}
                    >
                      نام
                    </span>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control form-control-md reserve-input"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group input-group-sm mt-3">
                  <div
                    className="input-group-prepend"
                    style={{ width: "100%" }}
                  >
                    <span
                      className="input-group-text reserve-input-label"
                      id="inputGroup-sizing-sm"
                      style={{
                        justifyContent: "center",
                        width: "100%",
                        borderRadius: "10px 10px 0px 0px",
                        backgroundColor: "lightblue"
                      }}
                    >
                      شماره تماس
                    </span>
                  </div>
                  <div style={{ width: "100%" }}>
                    <input
                      type="text"
                      className="form-control form-control-md reserve-input"
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="btn btn-success btn-block mt-3"
                value="رزرو"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Reserve;
