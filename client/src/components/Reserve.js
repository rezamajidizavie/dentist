import React, { Component } from "react";
import { DatePicker } from "react-persian-datepicker";
import "../assets/css/calender.css";
import "../assets/css/reserve.css";

class Reserve extends Component {
  render() {
    return (
      <div className="container text-center">
        <p className="display-3 mt-3">رزرو نوبت</p>
        <p className="lead text-center">
          نوبت دندانپزشکی خود را آنلاین رزرو کنید
        </p>
        <small>* نام، شماره تماس و تاریخ ویزیت را وارد نمایید</small>

        <div className="col-md-8 m-auto">
          <form>
            <div className="form-group">
              <div className="input-group input-group-sm mt-4">
                <div className="input-group-prepend" style={{ width: "100%" }}>
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
                <div className="input-group-prepend" style={{ width: "100%" }}>
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
                  <DatePicker
                    className="datepicker form-control form-control-md"
                    style={{ width: "100px" }}
                    calendarStyles={styles}
                    placeHolder="تاریخ"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="input-group input-group-sm mt-3">
                <div className="input-group-prepend" style={{ width: "100%" }}>
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
              className="btn btn-success btn-block mt-4"
              value="رزرو"
            />
          </form>
        </div>
      </div>
    );
  }
}
const styles = {
  calendarContainer: "calendarContainer",
  dayPickerContainer: "dayPickerContainer",
  monthsList: "monthsList",
  daysOfWeek: "daysOfWeek",
  dayWrapper: "dayWrapper",
  selected: "selected",
  heading: "heading"
};

export default Reserve;
