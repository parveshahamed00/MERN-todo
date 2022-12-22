import React from "react";
import "./Navbar.css";
function Navbar() {
  var options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  var today = new Date();
  today = today.toLocaleDateString("en-US", options);
  return (
    <div className="nav-bar">
      <div className="date">
        <h2>{today}</h2>
      </div>
      <div className="logout">
        <button className="user">PA</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
