import React, { Component } from "react";
import "../../assets/css/landing.css";
import Services from "./Services";
import Prices from "./Prices";
import Articles from "./Articles";
import WorkingDays from "./WorkingDays";
import ShowModal from "../utils/ShowModal";

class Landing extends Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <div>
        <div className="landing">
          <div className="overlay text-center">
            <div className="landing-area text-center">
              <div className="landing-area-overlay text-center">
                <h1
                  className="display-3 text-white landing-title"
                  style={{ marginTop: 10 }}
                >
                  دندانک
                </h1>

                <div
                  className="container"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <div className="list-group mt-1">
                    <p className="text-white lead landing-dsc">
                      عصب کشی، جرم گیری و روکش با جدیدترین امکانات پزشکی
                    </p>
                  </div>
                </div>
                <h1 className="lead text-white">
                  نوبت دندانپزشکی خود را آنلاین رزرو کنید!
                </h1>
                <button
                  className="btn btn-info mt-2 btn-lg"
                  onClick={this.openModal}
                >
                  رزرو نوبت
                </button>
                <ShowModal
                  isOpen={this.state.modalIsOpen}
                  closeModal={this.closeModal}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container text-center text-muted">
          <p className="display-3 mt-5 landing-main-header">
            مطب دندانپزشکی دندانک
          </p>
          <small>واقع در اردبیل، خیابان فلان، کوچه فلان</small>
          <Services />
          <Prices />
          <Articles />
          <WorkingDays />

          <br />
        </div>
      </div>
    );
  }
}

export default Landing;
