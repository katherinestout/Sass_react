import React from "react";

const NavTabs = props => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Home")}
        className={
          props.currentPage === "Home" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
        About
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Portfolio")}
        className={
          props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Blog
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Schedule")}
        className={
          props.currentPage === "Schedule" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </a>
    </li>
  </ul>
);

export default NavTabs;
