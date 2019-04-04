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
                <DatePickerComponent />
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

export default ShowModal;
