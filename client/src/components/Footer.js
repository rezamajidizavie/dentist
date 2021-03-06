import React, {Component} from "react";
import "../assets/css/footer.css";
class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer bg-dark text-white mt-5 p-4 text-center">
          <div className="footer-about">
            <span className="mt-3 ml-3">
              <span className="badge badge-secondary">شماره تماس</span>
              <span className="ml-2">09144500277-09144500288</span>
            </span>
          </div>

          <div className="mt-3">تمامی حقوق محفوظ است</div>
          <div className="mt-1">{new Date().getFullYear()} - Reza Majidi</div>
        </footer>
      </div>
    );
  }
}

export default Footer;
