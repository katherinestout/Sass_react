import React from "react";

const NavTabs = props => (
  <div className = "thisthis">

 
  
  <ul className="nav navbar">

 
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Portfolio")}
        className={
          props.currentPage === "Portfolio" ? "nav-link active" : "nav-link"
        }
      >
        Portfolio
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("Schedule")}
        className={
          props.currentPage === "Schedule" ? "nav-link active" : "nav-link"
        }
      >
       Schedule
      </a>
    </li>
    <li className="nav-item">
      <a
        onClick={() => props.handlePageChange("About")}
        className={
          props.currentPage === "About" ? "nav-link active" : "nav-link"
        }
      >
       Contact
      </a>
    </li>
  </ul>
  </div>
);

export default NavTabs;
