import React, {Component} from "react";
import {Link} from "react-router-dom";

export default class Dashboard extends Component {
  render() {
    return (
      <div className="container col-md-5 text-center mt-2 border rounded reserve-container-visible">
        <h1>داشبورد مدیریتی</h1>
        <p>نام مدیر: محسن مجیدی</p>

        <div className="m-2">
          <Link to="/reservelist" className="m-2">
            <button type="button" className="btn btn-info">
              لیست رزرو ها
            </button>
          </Link>
          <Link to="/admin" className="m-2">
            <button type="button" className="btn btn-info">
              تعیین ظرفیت
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
