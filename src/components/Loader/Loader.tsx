import React from "react";
import loader from "../../img/loader.svg";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="container">
      <div className="loader flex justify-center align-center">
        <img src={loader} alt="" />
      </div>
    </div>
  );
};

export default Loader;
