import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import tooth from "../assets/img/tooth.png";

import {connect} from "react-redux";
import {logoutUser} from "../actions/authActions";

import "../assets/css/navbar.css";
class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
    this.props.history.push("./");
  }

  render() {
    const {isAuthenticated, user} = this.props.auth;

    const authLinks = (
      <ul
        className=" auth-links navbar-nav ml-auto"
        style={{display: "flex", flexDirection: "row", alignItems: "center"}}
      >
        <li className="nav-item mr-2">
          <Link style={{color: "white"}} className="nav-link" to="/admin">
            تعیین ظرفیت ها
          </Link>
        </li>
        <li className="nav-item mr-2">
          <a
            href="#"
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link auth-links"
          >
            خروج
          </a>
        </li>
      </ul>
    );

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light main-navbar"
        style={{
          backgroundColor: "#eee",
          boxShadow: "0px 0px 15px -10px rgba(71,62,71,1)",
          borderBottom: "1px solid lightgray"
          // position: "fixed",
          // top: 0,
          // width: "100%",
          // zIndex: 12
        }}
      >
        <div
          style={{display: "flex", justifyContent: "flex-start"}}
          className="navbar-brand-items"
        >
          <Link className="navbar-brand" to="/" style={{padding: 0}}>
            <img
              src={tooth}
              className="tooth-logo rounded-circle"
              alt="tooth-logo"
            />
            دندانک
          </Link>
          {isAuthenticated ? authLinks : null}
        </div>

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
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/reserve">
                رزرو نوبت
              </Link>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="/#services">
                خدمات
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="/#prices">
                تعرفه ها
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="/#articles">
                مقالات
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <a className="nav-link" href="/#working-days">
                روزهای کاری
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {logoutUser}
)(withRouter(Navbar));
