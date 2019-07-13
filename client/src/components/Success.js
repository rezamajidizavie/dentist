import React, {Component} from "react";

class Success extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <p className="display-4 text-center mt-5">گزارش رزرو</p>
            <div className="alert alert-success text-center">
              رزرو توسط {this.props.location.state.detail.name} در تاریخ
              {this.props.location.state.detail.day} ساعت{" "}
              {this.props.location.state.detail.hour} با موفقیت انجام شد.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
