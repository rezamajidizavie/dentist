import React, { Component } from "react";

class WorkingDays extends Component {
  render() {
    return (
      <div>
        <div
          className="lead alert alert-success mt-5"
          id="working-days"
          style={{ backgroundColor: "#e9e2ec" }}
        >
          روزهای کاری
        </div>
        <p>
          شنبه تا پنجشنبه همه روزه از ساعت ۸ صبح تا ۱۲ شب آماده خدمت رسانی به
          هموطنان عزیز هستیم
        </p>
        <div>
          <span className="badge badge-secondary">آدرس</span>
          <span className="ml-2">
            اردبیل، خیابان فلان، کوچه فلان، پلاک فلان
          </span>
        </div>
        <div className="mt-3">
          <span className="badge badge-secondary">شماره تماس</span>
          <span className="ml-2">045-33620548</span>
        </div>
        <div className="mt-3">
          <span className="badge badge-secondary">ایمیل</span>
          <span className="ml-2">doctor@doctor.com</span>
        </div>
      </div>
    );
  }
}

export default WorkingDays;
