import React from "react";
import logo from "../logo.svg";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-sm light navbar-dark sticky-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} style={{ width: "90px" }} alt="awesome inc" />
          <p
            style={{
              color: "white",
              fontSize: "40px",
              marginTop: "30px",
              display: "inline-block",
              fontWeight: "200px",
              fontFamily: "Tilt Warp",
            }}
          >
            Josiah Charley
          </p>
        </div>
      </div>
    </div>
  );
}
