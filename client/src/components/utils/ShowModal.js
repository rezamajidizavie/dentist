import React, { Component } from "react";
import Modal from "react-modal";

import DatePickerComponent from "./DatePickerComponent";

class ShowModal extends Component {
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
          <p className="small">
            لطفا نام خود را وارد کرده و با کلیک بر روی ورودی تاریخ، تاریخ مورد
            نظر را نیز انتخاب کنید
          </p>
        </div>
        <form className="form">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                id="inputGroup-sizing-sm"
                style={{ justifyContent: "center", width: "50px" }}
              >
                نام
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              style={{ height: "40px" }}
            />
          </div>
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
          <div class="input-group input-group-sm mt-3">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                id="inputGroup-sizing-sm"
                style={{ justifyContent: "center", width: "80px" }}
              >
                شماره تماس
              </span>
            </div>
            <input
              type="text"
              class="form-control"
              style={{ height: "40px" }}
            />
          </div>
          <div className="buttons mt-3 text-center">
            <button className="btn btn-success" type="submit">
              رزرو
            </button>
          </div>
        </form>
        <button className="btn btn-danger mt-2" onClick={this.props.closeModal}>
          انصراف
        </button>
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
    width: "350px",
    height: "450px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default ShowModal;
