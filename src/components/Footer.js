import React from "react";
import "./style.css";
import operator from "../assets/img/operator.png"

function Footer() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        paddingBottom: "5%",
        paddingTop: "5%",
      }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-2">
            <img
              className="responsive"
              src={operator}
              alt="logo"
              style={{ width: "3rem"}}
            />
          </div>
          <div className="col-md-2">
            <p>171 / f-24, Sector-3/ Dwarka, New Delhi - 110058</p>
            <p>(+91)123456789</p>
            <p>Email: vivekthakur@gmail.com</p>
          </div>
          <div className="col-md-2">
            <ul className="alignList">
              <li><a href="/">About</a> </li>
              <li><a href="/">Merchants</a> </li>
              <li><a href="/">Partners</a> </li>
              <li><a href="/">Contact</a> </li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul className="alignList">
              <li><a href="/">LinkedIn</a> </li>
              <li><a href="/">Github</a> </li>
              <li><a href="/">Instagram</a> </li>
              <li><a href="/">Resume</a> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
