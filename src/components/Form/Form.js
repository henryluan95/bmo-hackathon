import "./Form.scss";
import backgroundEl1 from "../../assets/Rectangle1.svg";
import backgroundEl2 from "../../assets/Rectangle2.svg";
import backgroundEl3 from "../../assets/Rectangle3.svg";

import React, { useState } from "react";

const Form = () => {
  const [isNewComer, setIsNewComer] = useState(true);
  const [employment, setEmployment] = useState(false);
  const [goal, setGoal] = useState(false);
  const [recommendation, setRecommendation] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);
  const [isVietnamese, setIsVietnamese] = useState(false);

  //function to handle selection
  const handleChange = (e) => {
    if (e.target.value === "English") {
      setIsEnglish(true);
      setIsVietnamese(false);
    } else if (e.target.value === "Tiếng Việt") {
      setIsEnglish(false);
      setIsVietnamese(true);
    }
  };

  if (isNewComer) {
    return (
      <section className="overlay">
        <div className="card">
          <img
            className="backgroundEl1"
            src={backgroundEl1}
            alt="background icon"
          />
          <img
            className="backgroundEl3"
            src={backgroundEl3}
            alt="background icon"
          />
          <h1 className="card__title">
            {isEnglish
              ? "Begin your journey with BMO"
              : isVietnamese
              ? "Bắt đầu hành trình với BMO"
              : ""}
          </h1>
          <div className="status">
            <p className="status__title">
              {isEnglish
                ? "Are you a permanent resident?"
                : isVietnamese
                ? "Bạn có phải là dân thường trú"
                : ""}
            </p>
            <div className="buttons">
              <button className="button">
                {isEnglish ? "No" : isVietnamese ? "Không" : ""}
              </button>
              <button
                onClick={() => {
                  setIsNewComer(false);
                  setEmployment(true);
                }}
                className="button"
              >
                {isEnglish ? "Yes" : isVietnamese ? "Phải" : ""}
              </button>
            </div>
          </div>
          <div className="card__setting">
            <button
              className="return"
              onClick={() => window.location.replace("http://localhost:3000/")}
            >
              {isEnglish ? "Go Back" : isVietnamese ? "Quay Lại" : ""}
            </button>
            <img
              className="backgroundEl2"
              src={backgroundEl2}
              alt="background icon"
            />
            <select
              className="card__language"
              name="language"
              id="language"
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="українська мова" disabled>
                українська мова
              </option>
              <option value="繁體中文" disabled>
                繁體中文
              </option>
              <option value="简体中文" disabled>
                简体中文
              </option>
              <option value="العربية" disabled>
                العربية
              </option>
              <option value="Urdu" disabled>
                Urdu
              </option>
              <option value="French" disabled>
                French
              </option>
            </select>
          </div>
        </div>
      </section>
    );
  }

  if (employment) {
    return (
      <section className="overlay">
        <div className="card">
          <img
            className="backgroundEl1"
            src={backgroundEl1}
            alt="background icon"
          />
          <img
            className="backgroundEl3"
            src={backgroundEl3}
            alt="background icon"
          />
          <h1 className="card__title">
            {isEnglish
              ? "What are your plans in Canada?"
              : isVietnamese
              ? "Kế hoạch ở Canada của bạn là gì?"
              : ""}
          </h1>
          <div className="employments">
            <h2 className="employments__title">
              {isEnglish ? "I am... " : isVietnamese ? "Tôi là..." : ""}
            </h2>
            <div className="employments__buttons">
              <button className="button">
                {isEnglish ? "A student" : isVietnamese ? "Học sinh" : ""}
              </button>
              <button className="button">
                {isEnglish
                  ? "A business owner"
                  : isVietnamese
                  ? "Chủ doanh nghiệp"
                  : ""}
              </button>
              <button
                onClick={() => {
                  setEmployment(false);
                  setGoal(true);
                }}
                className="button"
              >
                {isEnglish
                  ? "Working/Looking for work"
                  : isVietnamese
                  ? "Đang làm/tìm việc làm"
                  : ""}
              </button>
              <button className="button">
                {isEnglish ? "Not sure yet" : isVietnamese ? "Không chắc" : ""}
              </button>
            </div>
          </div>
          <div className="card__setting">
            <img
              className="backgroundEl2"
              src={backgroundEl2}
              alt="background icon"
            />
            <button
              className="return"
              onClick={() => {
                setIsNewComer(true);
                setEmployment(false);
              }}
            >
              {isEnglish ? "Go Back" : isVietnamese ? "Quay Lại" : ""}
            </button>
            <select
              className="card__language"
              name="language"
              id="language"
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="українська мова" disabled>
                українська мова
              </option>
              <option value="繁體中文" disabled>
                繁體中文
              </option>
              <option value="简体中文" disabled>
                简体中文
              </option>
              <option value="العربية" disabled>
                العربية
              </option>
              <option value="Urdu" disabled>
                Urdu
              </option>
              <option value="French" disabled>
                French
              </option>
            </select>
          </div>
        </div>
      </section>
    );
  }

  if (goal) {
    return (
      <section className="overlay">
        <div className="card">
          <img
            className="backgroundEl1"
            src={backgroundEl1}
            alt="background icon"
          />
          <img
            className="backgroundEl3"
            src={backgroundEl3}
            alt="background icon"
          />
          <h1 className="card__title">
            {isEnglish
              ? "What are you hoping to accomplish?"
              : isVietnamese
              ? "Bạn đang muốn đạt được điều gì?"
              : ""}
          </h1>
          <div className="goals">
            <h2 className="goals__title">
              {isEnglish ? "I am... " : isVietnamese ? "Tôi cần" : ""}
            </h2>
            <div className="goals__buttons">
              <button className="button">
                {isEnglish
                  ? "Family banking"
                  : isVietnamese
                  ? "Dịch vụ gia đình"
                  : ""}
              </button>
              <button className="button">
                {isEnglish ? "Buying a home" : isVietnamese ? "Mua nhà" : ""}
              </button>
              <button
                onClick={() => {
                  setGoal(false);
                  setRecommendation(true);
                }}
                className="button"
              >
                {isEnglish
                  ? "Saving for retirement"
                  : isVietnamese
                  ? "Tiết kiệm tiền về hưu"
                  : ""}
              </button>
              <button className="button">
                {isEnglish
                  ? "Rewards program"
                  : isVietnamese
                  ? "Chương trình quà thưởng"
                  : ""}
              </button>
            </div>
          </div>
          <div className="card__setting">
            <img
              className="backgroundEl2"
              src={backgroundEl2}
              alt="background icon"
            />
            <button
              className="return"
              onClick={() => {
                setEmployment(true);
                setGoal(false);
              }}
            >
              {isEnglish ? "Go Back" : isVietnamese ? "Quay Lại" : ""}
            </button>
            <select
              className="card__language"
              name="language"
              id="language"
              onChange={handleChange}
            >
              <option value="English">English</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="українська мова" disabled>
                українська мова
              </option>
              <option value="繁體中文" disabled>
                繁體中文
              </option>
              <option value="简体中文" disabled>
                简体中文
              </option>
              <option value="العربية" disabled>
                العربية
              </option>
              <option value="Urdu" disabled>
                Urdu
              </option>
              <option value="French" disabled>
                French
              </option>
            </select>
          </div>
        </div>
      </section>
    );
  }

  if (recommendation) {
    return (
      <section className="overlay">
        <div className="card card--position">
          <img
            className="backgroundEl1"
            src={backgroundEl1}
            alt="background icon"
          />
          <img
            className="backgroundEl3"
            src={backgroundEl3}
            alt="background icon"
          />
          <h1 className="card__title card__title--left">
            {isEnglish
              ? "Saving For Retirement "
              : isVietnamese
              ? "Tiết kiệm tiền về hưu"
              : ""}
          </h1>
          <div className="recommendations">
            <h2 className="recommendations__title">RRSPs</h2>
            <div className="recommendations__info">
              <div className="recommendations__detail">
                <p className="recommendations__text">
                  {isEnglish
                    ? ` Registered Retirement Savings Plans (RRSPs) are accounts
              specifically designed to help you invest for retirement.
               Saving For Retirement  `
                    : isVietnamese
                    ? "Registered Retirement Savings Plans (RRSPs) là những tài khoản được thiết kế để giúp khách hàng tiết kiệm tiền về hưu."
                    : ""}
                </p>
                <p className="recommendations__text">
                  {isEnglish
                    ? `You can fill your RRSP with a mix of investments like stocks,
              mutual funds, and other savings accounts, and you even get a
              tax break on any income you invest in your RRSP.`
                    : isVietnamese
                    ? "Khách hàng có thể sử dụng RRSP để giữ các sản phẩm đầu tư như cổ phiếu, quỹ tương hỗ, và các tài khoản tiết kiệm, và khách hàng có thể hoãn phần thuế trên thu nhập khi đầu tư vào RRSP."
                    : ""}
                </p>
              </div>
              <div className="recommendations__detail">
                <p className="recommendations__text">
                  {isEnglish ? "Meet Raj," : isVietnamese ? "Gặp Raj," : ""}
                </p>
                <p className="recommendations__text">
                  {" "}
                  {isEnglish
                    ? `Raj is ready to retire and had opened his RRSP 30 years ago
                    when he first started working. He talked with a BMO advisor
                    and discovered he should be saving about $10,000 each year.`
                    : isVietnamese
                    ? "Raj đã sẵn sàng để về hưu và đã mở RRSP 30 năm về trước khi anh mới bắt đầu đi làm. Anh đã làm việc với tư vấn viên của BMO và được khuyên là anh nên đầu tư tầm $10,000 mỗi năm."
                    : ""}
                </p>
                <p className="recommendations__text">
                  {" "}
                  {isEnglish
                    ? `Raj had been putting that money into his RRSP for each of his
                    30 years in the workforce, and because of that he was able to
                    retire with 60% more savings when compared to an unregistered
                    savings account.`
                    : isVietnamese
                    ? "Raj đã bắt đầu đầu tư vào tài khoản RRSP mỗi năm trong 30 năm qua khi đi làm. Cũng bởi vì vậy, anh đã có thể về hưu với mức tiết kiệm cao hơn 60% so với việc đầu tư vào tài khoản tiêt kiệm bình thường."
                    : ""}
                </p>
              </div>
            </div>
            <a
              className="button recommendations__button"
              href="https://www.bmo.com/main/personal/investments/schedule-a-call/?icid=tl-US32840INV1-HTBMO39"
              target="_blank"
            >
              {isEnglish
                ? `Talk to an advisor`
                : isVietnamese
                ? "Trò chuyện với nhà tư vấn"
                : ""}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return <section>Loading...</section>;
};

export default Form;
