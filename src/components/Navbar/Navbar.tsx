import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarOn } from "../../store/sidebarSlice";
import { getAllCategories } from "../../store/categorySlice";

import "./Navbar.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);

  return (
    <nav className="navbar">
      <div className="navbar-cnt flex align-center">
        <div className="brand-and-toggler flex align-center">
          <button
            type="button"
            className="sidebar-show-btn text-white"
            onClick={() => {
              dispatch(setSidebarOn());
            }}
          >
            <i className="fas fa-bars"></i>
          </button>
          <Link to="/" className="navbar-brand flex align-center">
            <span className="navbar-brand-ico">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="navbar-brand-txt mx-2">
                <span className="fw-7">MNOR</span>
              </span>
            </span>
          </Link>
        </div>
        <div className="navbar-collapse w-100">
          <div className="navbar-search bg-white">
            <div className="flex align-center">
              <input
                type="text"
                className="form-control fs-14"
                placeholder="Search you items here"
              />
              <Link
                to=""
                className="text-white search-btn flex align-center justify-center"
              >
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </div>
          </div>
          <ul className="navbar-nav flex align-center fs-12 fw-4 font-manrope">
            {categories.slice(0, 9).map((category: any, index: number) => {
              return (
                <li key={index} className="nav-link no-wrap">
                  <Link
                    key={`link-${index}`}
                    to={`category${category}`}
                    className="nav-link text-capitalize"
                  >
                    {category.replace("-", " ")}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="navbar-cart flex align-center">
          <Link to="" className="cart-btn">
            <i className="fa-solid fa-card-shopping"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
