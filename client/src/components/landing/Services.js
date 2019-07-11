import React, {Component} from "react";
import cardImageOne from "../../assets/img/landing.jpg";
import cardImageTwo from "../../assets/img/dentist.jpg";
import cardImageThree from "../../assets/img/child.jpg";

class Services extends Component {
  render() {
    return (
      <div>
        <div
          className="lead alert alert-success mt-5"
          id="services"
          style={{backgroundColor: "rgb(52,58,64)", color: "white"}}
        >
          خدمات
        </div>
        <div className="row justify-content-center mt-1">
          <div className="col-md-4 mb-3">
            <div className="card service-card">
              <div className="card-header p-0">
                <img
                  src={cardImageOne}
                  alt="card"
                  style={{width: "100%", height: "220px"}}
                />
              </div>
              <div className="card-body">
                <div className="card-subtitle">جرم گیری</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card service-card">
              <div className="card-header p-0">
                <img
                  src={cardImageTwo}
                  alt="card"
                  style={{width: "100%", height: "220px"}}
                />
              </div>
              <div className="card-body">
                <div className="card-subtitle">عصب کشی</div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card service-card">
              <div className="card-header p-0">
                <img
                  src={cardImageThree}
                  alt="card"
                  style={{width: "100%", height: "220px"}}
                />
              </div>
              <div className="card-body">
                <div className="card-subtitle">روکش</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
