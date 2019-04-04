import React, { Component } from "react";
import DatePicker from "./react-persian-datepicker/src/components/DatePicker";
import "../../assets/css/calender.css";

class DatePickerComponent extends Component {
  render() {
    return (
      <DatePicker
        style={{ height: "40px" }}
        className="form-control text-center"
        calendarStyles={styles}
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
