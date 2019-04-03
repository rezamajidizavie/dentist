import React, { Component } from "react";
import tooth from "../assets/img/tooth.png";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{
          backgroundColor: "rgba(240,240,240)",
          opacity: 0.9
        }}
      >
        <img
          src={tooth}
          className="tooth-logo rounded-circle"
          alt="tooth-logo"
        />
        <a className="navbar-brand" href="/">
          دندانک
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" />
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/reserve">
                رزرو نوبت
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                خدمات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#prices">
                تعرفه ها
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#articles">
                مقالات
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#working-days">
                روزهای کاری
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="َabout-us">
                درباره ما
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
