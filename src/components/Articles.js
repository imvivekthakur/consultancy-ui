import React from "react";
import "./style.css";
import img1 from "../assets/img/1.jpg";
import { Button } from "react-bootstrap";

function Articles() {
  const data = [];

  for (let i = 0; i < 2; i++) {
    data.push(
      <div className="container" style={{backgroundColor:"#F5F6F9", borderRadius:"10px"}}>
        <div
          style={{
            marginBottom: "5%",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#F5F6F9"
          }}
        >
          <div className="row" >
            <div className="col-md-8">
              <h4 className="theme">#PLANNING</h4>
              <h1>Strategic Planning and Business Development</h1>
            </div>
            <div className="col-md-4">
              <img height={200} width={300} src={img1} alt="img1" />
            </div>
            <div style={{color:"grey"}}>
              Our expert team helps you formulate strategic plans that drive
              success by identifying goals, challenges, and effective strategies
              to achieve your vision.
              <br />
              <br />
              XYZ | Marketing Manager
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="margin-top"
      style={{
        backgroundColor: "white",
        paddingBottom: "5%",
      }}
    >
      <div style={{ textAlign: "center", fontSize:"2.8rem" , fontWeight:"600"}}>
        <h1 style={{fontSize:"2.8rem" , fontWeight:"600"}}>Articles</h1>
        <h2 style={{ marginBottom: "3%" , fontSize:"2.4rem" , fontWeight:"600"}}>
          <span className="theme">Blogs</span> |{" "}
          <span style={{ color: "grey" }}>News Articles</span>
        </h2>
      </div>
      <div>{data}</div>
      <div style={{ textAlign: "center" }}>
        <Button
          style={{
            width: "150px",
            backgroundColor: "rgb(80, 200, 220)",
            border: "none",
          }}
        >
          View All
        </Button>
      </div>
    </div>
  );
}

export default Articles;
