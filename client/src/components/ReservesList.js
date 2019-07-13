import React, {Component} from "react";
import axios from "axios";
import * as moment from "jalali-moment";
import "../assets/css/reserveList.css";

export default class ReservesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reserves: [],
      month: undefined
    };
  }

  componentDidMount() {
    let month = moment()
      .locale("fa")
      .format("MM");
    this.setState({
      month: month
    });

    axios.get("api/reserve/all").then(res => {
      let results = res.data;
      for (let i = 0; i < results.length; i++) {
        for (let j = i + 1; j < results.length; j++) {
          if (results[i].date > results[j].date) {
            let temp = results[i];
            results[i] = results[j];
            results[j] = temp;
          }
        }
      }
      this.setState({
        reserves: results
      });
    });
  }

  onRemoveItem = id => {
    axios.post("api/reserve/delete", {id}).then(res => {
      console.log(res.data);
      axios.get("api/reserve/all").then(res => {
        let results = res.data;
        for (let i = 0; i < results.length; i++) {
          for (let j = i + 1; j < results.length; j++) {
            if (results[i].date > results[j].date) {
              let temp = results[i];
              results[i] = results[j];
              results[j] = temp;
            }
          }
        }
        this.setState({
          reserves: results
        });
      });
    });
  };

  render() {
    return (
      <div>
        <div>
          {this.state.reserves.map((item, index) => (
            <div
              className="border rounded p-3 m-2 list-wrapper shadow"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
              key={index}
            >
              <p style={{margin: 0}} className="col-3">
                <span className="badge badge-success">{index + 1} </span>{" "}
                <strong>نام: </strong>
                {item.name}{" "}
              </p>
              <p style={{margin: 0}} className="col-3 text-center">
                <strong>تاریخ: </strong>
                {this.state.month}/{item.date}
              </p>
              <p style={{margin: 0}} className="col-5 text-center">
                <strong>شماره: </strong>
                {item.phone}{" "}
              </p>
              <button
                onClick={this.onRemoveItem.bind(this, item._id)}
                className="btn btn-danger col-1"
              >
                &#10006;
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
