import React, { Component } from "react";
import DatePickerComponent from "./utils/DatePickerComponent";

class Reserve extends Component {
  render() {
    return (
      <div className="container text-center">
        <p className="display-3 mt-3">رزرو نوبت</p>
        <p className="lead text-center">
          نوبت دندانپزشکی خود را آنلاین رزرو کنید
        </p>
        <div className="col-md-8 m-auto">
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="نام"
              />
            </div>
            <div className="form-group">
              <div class="input-group input-group-sm mt-3">
                <div class="input-group-prepend">
                  <span
                    class="input-group-text"
                    id="inputGroup-sizing-sm"
                    style={{ justifyContent: "center", width: "50px" }}
                  >
                    تاریخ
                  </span>
                </div>
                <DatePickerComponent />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reserve;
