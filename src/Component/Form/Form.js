import "./Form.scss";
import backgroundEl1 from "../../Assets/Rectangle1.svg";
import backgroundEl2 from "../../Assets/Rectangle2.svg";
import backgroundEl3 from "../../Assets/Rectangle3.svg";

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
              onClick={() => window.location.replace("http://localhost:3001/")}
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
              <option value="українська мова">українська мова</option>
              <option value="繁體中文">繁體中文</option>
              <option value="简体中文">简体中文</option>
              <option value="العربية">العربية</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="Urdu">Urdu</option>
              <option value="French">French</option>
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
          <h1 className="card__title">What are your plans in Canada?</h1>
          <div className="employments">
            <h2 className="employments__title">I am...</h2>
            <div className="employments__buttons">
              <button className="button">A student</button>
              <button className="button">A business owner</button>
              <button
                onClick={() => {
                  setEmployment(false);
                  setGoal(true);
                }}
                className="button"
              >
                Working/Looking for work
              </button>
              <button className="button">Not sure yet</button>
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
              Go Back
            </button>
            <select className="card__language" name="language" id="language">
              <option value="">English</option>
              <option value="українська мова">українська мова</option>
              <option value="繁體中文">繁體中文</option>
              <option value="简体中文">简体中文</option>
              <option value="العربية">العربية</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="Urdu">Urdu</option>
              <option value="French">French</option>
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
          <h1 className="card__title">What are you hoping to accomplish?</h1>
          <div className="goals">
            <h2 className="goals__title">I am...</h2>
            <div className="goals__buttons">
              <button className="button">Family banking</button>
              <button className="button">Buying a home</button>
              <button
                onClick={() => {
                  setGoal(false);
                  setRecommendation(true);
                }}
                className="button"
              >
                Saving for retirement
              </button>
              <button className="button">Rewards program</button>
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
              Go Back
            </button>
            <select className="card__language" name="language" id="language">
              <option value="">English</option>
              <option value="українська мова">українська мова</option>
              <option value="繁體中文">繁體中文</option>
              <option value="简体中文">简体中文</option>
              <option value="العربية">العربية</option>
              <option value="Tiếng Việt">Tiếng Việt</option>
              <option value="Urdu">Urdu</option>
              <option value="French">French</option>
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
            Saving For Retirement
          </h1>
          <div className="recommendations">
            <h2 className="recommendations__title">RRSPs</h2>
            <div className="recommendations__info">
              <div className="recommendations__detail">
                <p className="recommendations__text">
                  Registered Retirement Savings Plans (RRSPs) are accounts
                  specifically designed to help you invest for retirement.
                </p>
                <p className="recommendations__text">
                  You can fill your RRSP with a mix of investments like stocks,
                  mutual funds, and other savings accounts, and you even get a
                  tax break on any income you invest in your RRSP.
                </p>
              </div>
              <div className="recommendations__detail">
                <p className="recommendations__text">Meet Raj,</p>
                <p className="recommendations__text">
                  Raj is ready to retire and had opened his RRSP 30 years ago
                  when he first started working. He talked with a BMO advisor
                  and discovered he should be saving about $10,000 each year.
                </p>
                <p className="recommendations__text">
                  Raj had been putting that money into his RRSP for each of his
                  30 years in the workforce, and because of that he was able to
                  retire with 60% more savings when compared to an unregistered
                  savings account.
                </p>
              </div>
            </div>
            <a
              className="button recommendations__button"
              href="https://www.bmo.com/main/personal/investments/schedule-a-call/?icid=tl-US32840INV1-HTBMO39"
              target="_blank"
            >
              Talk to an advisor
            </a>
          </div>
        </div>
      </section>
    );
  }

  return <section>Hello</section>;
};

export default Form;
