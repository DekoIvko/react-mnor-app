import React from "react";

import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-orange">
      <div className="container text-center">
        <div className="footer-center flex alignt-center justify-center text-white fw-3 fs-14">
          <Link to="/" className="text-uppercase">
            Privacy policy
          </Link>
          <div className="vr m-2"></div>
          <Link to="/" className="text-uppercase">
            Term of service
          </Link>
          <div className="vr m-2"></div>
          <Link to="/" className="text-uppercase">
            About MNOR
          </Link>
        </div>
        <span className="text-white copyright-text text-manrope">
          © 2023 MNOR. All Rights Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
