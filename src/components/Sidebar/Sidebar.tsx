import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSidebarStatus, setSidebarOff } from "../../store/sidebarSlice";
import { Link } from "react-router-dom";
import {
  fetchAsyncCategories,
  getAllCategories,
} from "../../store/categorySlice";

import "./Sidebar.scss";

const Sidebar = () => {
  const dispatch = useDispatch<any>();
  const isSidebaron = useSelector(getSidebarStatus);
  const categories = useSelector(getAllCategories);

  useEffect(() => {
    dispatch(fetchAsyncCategories());
  }, [dispatch]);

  return (
    <aside className={`sidebar ${isSidebaron ? "hide-sidebar" : ""}`}>
      <button
        className="sidebar-hide-btn"
        onClick={() => dispatch(setSidebarOff())}
      >
        <i className="fas fa-times"></i>
      </button>
      <div className="sidebar-cnt">
        <div className="cat-title fs-17 text-uppercase fw-6 ls-1h">
          All Categories
        </div>
        <ul className="cat-list">
          {categories.map((category: any, index: number) => {
            return (
              <li key={index}>
                <Link to={`category/${category}`} className="cat-list-link">
                  {category.replace("-", " ")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
