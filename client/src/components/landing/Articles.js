import React, {Component} from "react";

class Articles extends Component {
  render() {
    return (
      <div>
        <div
          className="lead alert alert-success  mt-5"
          id="articles"
          style={{backgroundColor: "rgb(52,58,64)", color: "white"}}
        >
          مقالات
        </div>
        <div className="card card-body article-card mt-3 p-5">
          <div className="row">
            <p className="lead">
              <i className="fas fa-newspaper mr-2" />
              بهترین شیوه عصب کشی چیست؟
            </p>
            <p style={{textAlign: "justify"}}>
              کانال ریشه و حفره مغز دندان حفره‌هایی در ساختمان دندان هستند که
              به‌طور طبیعی بافت‌های عصبی و رگ‌های خونی و بافت‌های سلولی دیگری را
              در خود جای می‌دهند. در صورتی که پوسیدگی دندان در مراحل اولیه درمان
              نشود، پوسیدگی از مینای دندان عبور نموده و به عاج می‌رسد و در ادامه
              می‌تواند به فضای پالپ (یا همان مغز دندان) گسترش یابد. ورود
              میکروب‌ها به پالپ دندان باعث ایجاد التهاب در پالپ شده و این التهاب
              باعث افزایش حجم پالپ می‌شود. با توجه به اینکه پالپ دندان یک محفظه
              بسته است، التهاب باعث افزایش شدید فشار داخلی آن می‌شود. این افزایش
              فشار، منجر به فشار آمدن به پایانه‌های عصب دندان شده و درد دندان
              شروع می‌شود...
            </p>
          </div>
          <button className="btn btn-info">خواندن مقاله</button>
        </div>
        <div className="card card-body article-card mt-3 p-5">
          <div className="row">
            <p className="lead">
              <i className="fas fa-newspaper mr-2" />
              چرا دندان ها فاسد میشوند؟
            </p>
            <p style={{textAlign: "justify"}}>
              پوسیدگی به معنی نرم شدن مینای دندان است و باعث آسیب ساختاری دندان
              می شود، ناشی از اسیدهای ایجاد شده توسط پلاک باکتری هایی که در
              هنگام شکستن قند در دهان شما ایجاد می شوند.پوسیدگی دندان اگر این از
              دست رفتن مواد معدنی مینای دندان درمان نشود، در دندان حفره ها و
              پوسیدگی هایی می تواند رخ دهد. بدون درمان، این سوراخ ها در طول زمان
              بزرگ تر می شوند و حتی ممکن است کل دندان را از بین ببرند...
            </p>
          </div>
          <button className="btn btn-info">خواندن مقاله</button>
        </div>
        <button className="btn btn-secondary mt-3"> همه مقالات</button>
      </div>
    );
  }
}

export default Articles;
