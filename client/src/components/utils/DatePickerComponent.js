import React, { Component } from "react";
import { DatePicker } from "react-persian-datepicker";
import "../../assets/css/calender.css";

class DatePickerComponent extends Component {
  render() {
    return (
      <DatePicker
        style={{ height: "40px" }}
        className="form-control"
        calendarStyles={styles}
        placeholder="تاریخ"
      />
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

export default DatePickerComponent;
