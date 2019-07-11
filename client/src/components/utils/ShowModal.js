import React, { Component } from "react";
import Modal from "react-modal";
import * as moment from "jalali-moment";
import DatePicker from "../utils/react-persian-datepicker/src/components/DatePicker";
import axios from "axios";
import { withRouter } from "react-router-dom";
class ShowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: null,
      phone: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const newReserve = {
      name: this.state.name,
      date: moment(this.state.date).format("YYYY/MM/DD"),
      phone: this.state.phone
    };
    axios
      .post("/api/reserve", newReserve)
      .then(res => {
        this.props.history.push("/success");
      })
      .catch(err => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <Modal
        isOpen={!!this.props.isOpen}
        style={customStyles}
        onRequestClose={this.props.closeModal}
        closeTimeoutMS={1000}
      >
        <div className="container text-center">
          <p className="display-4">رزرو نوبت</p>
          <p className="small">لطفا تاریخ، نام و شماره تماس را وارد نمایید</p>
        </div>
        <form className="form" onSubmit={this.onSubmit}>
          <div className="form-group">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend" style={{ width: "100%" }}>
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
              <div style={{ width: "100%" }}>
                <DatePicker
                  style={{ height: "40px" }}
                  className="form-control text-center"
                  onChange={date => this.setState({ date: date })}
                  value={this.state.date}
                  name="date"
                  calendarStyles={styles}
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
                    borderRadius: "10px 10px 0px 0px"
                  }}
                >
                  نام
                </span>
              </div>
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control form-control-md reserve-input"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
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
                    borderRadius: "10px 10px 0px 0px"
                  }}
                >
                  شماره تماس
                </span>
              </div>
              <div style={{ width: "100%" }}>
                <input
                  type="text"
                  className="form-control form-control-md reserve-input"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.onChange}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-success btn-block mt-3"
            value="رزرو"
          />
          <button
            className="btn btn-danger btn-block"
            onClick={this.props.closeModal}
          >
            انصراف
          </button>
        </form>
      </Modal>
    );
  }
}

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    borderRadius: "10px",
    width: "330px",
    height: "550px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

const styles = {
  calendarContainer: "calendarContainer",
  dayPickerContainer: "dayPickerContainer",
  monthsList: "monthsList",
  daysOfWeek: "daysOfWeek",
  dayWrapper: "dayWrapper",
  selected: "selected",
  heading: "heading"
};

export default withRouter(ShowModal);
