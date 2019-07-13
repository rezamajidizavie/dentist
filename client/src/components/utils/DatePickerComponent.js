import React, {Component} from "react";
import DatePicker from "./react-persian-datepicker/src/components/DatePicker";
import "../../assets/css/calender.css";
import moment from "moment-jalali";

class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <DatePicker
        style={{height: "40px"}}
        className="form-control text-center"
        calendarStyles={styles}
        onChange={this.props.onChange}
        value={this.props.value}
        name={this.props.name}
        min={this.props.min}
        defaultValue={this.props.defaultValue}
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
