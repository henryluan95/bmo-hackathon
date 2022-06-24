import "./LandingPage.scss";

import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Link to="/status" className="landing-page__button">
        Discover your solution
      </Link>
    </div>
  );
};

export default LandingPage;
