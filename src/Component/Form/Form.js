import "./Form.scss";

import React, { useState } from "react";

const Form = () => {
  const [isNewComer, setIsNewComer] = useState(true);
  const [employment, setEmployment] = useState(false);
  const [goal, setGoal] = useState(false);
  const [recommendation, setRecommendation] = useState(false);

  if (isNewComer) {
    return (
      <section className="overlay">
        <div className="card">
          <h1 className="card__title">Begin your journey with BMO</h1>
          <div className="status">
            <p className="status__title">Are you a permanent resident?</p>
            <div className="buttons">
              <button className="button">No</button>
              <button className="button">Yes</button>
            </div>
          </div>
          <div className="card__setting">
            <button>Back</button>
            <select className="card__language" name="language" id="language">
              <option value="">--Please choose a language--</option>
              <option value="English">English</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="hamster">Ukrainian</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
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
          <h1 className="card__title">What are your plans in Canada?</h1>
          <div className="employments">
            <h2 className="employments__title">I am...</h2>
            <div className="employments__buttons">
              <button className="button">A student</button>
              <button className="button">A business owner</button>
              <button className="button">Working/Looking for work</button>
              <button className="button">Not sure yet</button>
            </div>
          </div>
          <div className="card__setting">
            <button>Back</button>
            <select className="card__language" name="language" id="language">
              <option value="">--Please choose a language--</option>
              <option value="English">English</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="hamster">Ukrainian</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
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
          <h1 className="card__title">What are you hoping to accomplish?</h1>
          <div className="goals">
            <h2 className="goals__title">I am...</h2>
            <div className="goals__buttons">
              <button className="button">Family banking</button>
              <button className="button">Buying a home</button>
              <button className="button">Saving for retirement</button>
              <button className="button">Rewards program</button>
            </div>
          </div>
          <div className="card__setting">
            <button>Back</button>
            <select className="card__language" name="language" id="language">
              <option value="">--Please choose a language--</option>
              <option value="English">English</option>
              <option value="Viet Nam">Viet Nam</option>
              <option value="hamster">Ukrainian</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
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
            <a className="button recommendations__button" href="">
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