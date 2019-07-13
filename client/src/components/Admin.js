import React, {Component} from "react";
import axios from "axios";
import greenCheck from "../assets/img/green-check.png";
import DatePickerComponent from "./utils/DatePickerComponent";
import * as moment from "jalali-moment";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: undefined,
      selectedHour: "8-10",
      space: 0,
      errors: "",
      spaceResponse: false
    };
  }
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onTableSubmit = e => {
    this.setState({
      spaceResponse: false
    });
    e.preventDefault();
    let selectedHour;
    switch (this.state.selectedHour) {
      case "8-10":
        selectedHour = "eightToTen";
        break;
      case "10-12":
        selectedHour = "tenToTwelve";
        break;
      case "12-14":
        selectedHour = "twelveToTwo";
        break;
      case "14-16":
        selectedHour = "twoToFour";
        break;
      case "16-18":
        selectedHour = "fourToSix";
        break;
      case "18-20":
        selectedHour = "sixToEight";
        break;
    }
    const tableData = {
      date: moment(this.state.selectedDay).format("YYYY/MM/DD"),
      space: this.state.space,
      selectedHour
    };
    axios.post("/api/reserve/spaces", tableData).then(res =>
      this.setState({
        spaceResponse: true
      })
    );
  };

  handleSelectChange = e => {
    this.setState({selectedHour: e.target.value});
  };

  render() {
    return (
      <div className="border rounded">
        <form onSubmit={this.onTableSubmit} className="m-3">
          <label htmlFor="DatePicker" className="text-muted mt-3 text-danger">
            تاریخ مورد نظر را انتخاب نمایید:
          </label>
          <DatePickerComponent
            id="DatePicker"
            defaultValue={moment()}
            value={this.state.selectedDay}
            onChange={value => this.setState({selectedDay: value})}
            min={moment().subtract(1, "days")}
          />
          <div class="form-group">
            <label
              htmlFor="exampleFormControlSelect1"
              className="text-muted mt-3 text-danger"
            >
              ساعت مورد نظر را انتخاب نمایید:
            </label>
            <select
              class="form-control text-center"
              id="exampleFormControlSelect1"
              value={this.state.selectedHour}
              onChange={this.handleSelectChange}
            >
              <option>8-10</option>
              <option>10-12</option>
              <option>12-14</option>
              <option>14-16</option>
              <option>16-18</option>
              <option>18-20</option>
            </select>
          </div>
          <div className="form-group">
            <label
              htmlFor="exampleFormControlSelect1"
              className="text-muted text-danger"
            >
              ظرفیت:
            </label>
            <input
              required
              name="space"
              onChange={this.onChange}
              type="text"
              className="form-control form-control-md text-center mt-0"
              value={this.state.space}
            />
          </div>

          <input className="btn btn-success w-100" type="submit" value="ثبت" />
        </form>
        {this.state.spaceResponse ? (
          <p className="mt-3 text-success">اطلاعات با موفقیت ارسال گردید</p>
        ) : null}
        {this.state.errors ? (
          <p className="mt-3 text-danger">ارسال اطلاعات ناموفق بود</p>
        ) : null}
      </div>
    );
  }
}
