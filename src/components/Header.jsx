import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <section className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        <NavLink to="/" className="filter-btn">
          all
        </NavLink>
        <NavLink to="/breakfast" className="filter-btn">
          Breakfast
        </NavLink>
        <NavLink to="/lunch" className="filter-btn">
          Lunch
        </NavLink>
        <NavLink to="shapes" className="filter-btn">
          Shakes
        </NavLink>
      </div>
    </section>
  );
}

export default Header;
