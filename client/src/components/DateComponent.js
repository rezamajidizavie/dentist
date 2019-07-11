import React, {Component} from "react";
import * as moment from "jalali-moment";
import axios from "axios";
import "../../src/assets/css/dateComponent.css";

class DateComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 0,
      spaces: [],
      dateClassName: "date-box"
    };
    this.showDate = this.showDate.bind(this);
  }

  showDate(e) {
    e.preventDefault();
    this.props.handlerFromParant(e.target.value);
    this.setState({
      active: e.target.value,
      opacity: 1,
      dateClassName: "date-box-visible"
    });
  }

  buttonForReserve = (
    <button style={{width: "100%"}} className="btn btn-success">
      رزرو کنید
    </button>
  );

  buttonForNoReserve = (
    <button disabled className="btn btn-danger" style={{width: "100%"}}>
      ظرفیت وجود ندارد
    </button>
  );

  sendData = e => {
    e.preventDefault();
    this.props.handlerFromParant(
      this.state.active,
      this.state.spaces[this.state.active]
    );
  };

  componentDidMount() {
    axios.get("api/reserve/spaces").then(res => {
      const spaces = [];
      spaces[0] = res.data[0].firstDay;
      spaces[1] = res.data[0].secondDay;
      spaces[2] = res.data[0].thirdDay;
      spaces[3] = res.data[0].fourthDay;
      spaces[4] = res.data[0].fifthDay;
      this.setState({
        spaces
      });
    });
  }

  render() {
    const dates = [];
    let month = moment()
      .locale("fa")
      .format("MM");
    for (let i = 0; i < 5; i++) {
      dates[i] =
        parseInt(
          moment()
            .locale("fa")
            .format("DD")
        ) + i;
    }
    return (
      <div>
        <div style={styles.main}>
          <div className="btn-group" style={{width: "100%"}}>
            {dates.map((item, index) => (
              <button
                onClick={this.showDate}
                value={index}
                key={index}
                className="dateButtons btn btn-secondary btn-sm"
              >
                {month}/{item}
              </button>
            ))}
          </div>
        </div>
        <div style={styles.reserveBox} className={this.state.dateClassName}>
          <div style={{padding: 10}}>
            روز: {month}/{dates[this.state.active]}
            <div>تعداد ظرفیت خالی: {this.state.spaces[this.state.active]}</div>
          </div>

          {/* {timing[this.state.active].empty != 0
            ? this.buttonForReserve
            : this.buttonForNoReserve} */}
        </div>
      </div>
    );
  }
}

export default DateComponent;

const styles = {
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "spaceBetween"
  },
  reserveBox: {
    borderRadius: "0px 0px 10px 10px",
    border: "1px solid gray",
    padding: 0
  }
};
