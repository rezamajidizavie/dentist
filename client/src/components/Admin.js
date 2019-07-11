import React, {Component} from "react";
import axios from "axios";
import greenCheck from "../assets/img/green-check.png";

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serverResponse: {},
      firstDay: 0,
      secondDay: 0,
      thirdDay: 0,
      fourthDay: 0,
      fifthDay: 0,
      spaceResponse: false,
      errors: ""
    };
  }
  onChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  onTableSubmit = e => {
    this.setState({
      errors: "",
      spaceResponse: false
    });
    e.preventDefault();
    const tableData = {
      firstDay: this.state.firstDay,
      secondDay: this.state.secondDay,
      thirdDay: this.state.thirdDay,
      fourthDay: this.state.fourthDay,
      fifthDay: this.state.fifthDay
    };
    axios
      .post("/api/reserve/spaces", tableData)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            spaceResponse: true
          });
        }
      })
      .catch(err => {
        this.setState({
          errors: err.response.data.message
        });
      });
  };

  render() {
    if (this.state.spaceResponse) {
      return (
        <div className="container text-center">
          <img
            src={greenCheck}
            alt="green-check"
            className="img-fluid mt-4"
            style={{maxWidth: "100px"}}
          />
          <p className="mt-3 lead text-success">
            ارسال اطلاعات موفقیت آمیز بود
          </p>
        </div>
      );
    } else {
      return (
        <div className="container border col-md-8 col-lg-6 mt-4 p-0 text-center">
          <form onSubmit={this.onTableSubmit}>
            <table className="table">
              <thead>
                <tr>
                  <th>روز اول</th>
                  <th>روز دوم</th>
                  <th>روز سوم</th>
                  <th>روز چهارم</th>
                  <th>روز پنجم</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="firstDay"
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="secondDay"
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="thirdDay"
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="fourthDay"
                      onChange={this.onChange}
                    />
                  </td>
                  <td>
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="fifthDay"
                      onChange={this.onChange}
                      disabled={this.state.spaceResponse}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              className="btn btn-success w-100"
              type="submit"
              value="ثبت"
            />
          </form>
          {this.state.spaceResponse ? (
            <p className="mt-3 text-success">اطلاعات با موفقیت ارسال گردید</p>
          ) : null}
          {this.state.errors ? (
            <p className="mt-3 text-danger">ارسال اطلاعات ناموفق بود</p>
          ) : null}
        </div>
      );
    }
  }
}
