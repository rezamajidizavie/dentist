import React, { Component } from "react";

class Prices extends Component {
  render() {
    return (
      <div>
        <div
          className="lead alert alert-success mt-5"
          id="prices"
          style={{ backgroundColor: "#e9e2ec" }}
        >
          تعرفه ها
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>نام خدمت</th>
              <th>تعرفه</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="price-table-header">عصب کشی</th>
              <td>200,000 تومان</td>
            </tr>
            <tr>
              <th className="price-table-header">روکش</th>
              <td>300,000 تومان</td>
            </tr>
            <tr>
              <th className="price-table-header">جرم گیری</th>
              <td>250,000 تومان</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Prices;
