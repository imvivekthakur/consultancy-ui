import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function Courses() {
  return (
    <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
      <h2 style={{ marginBottom: "3%" }}>
        Our <span className="theme">subscription plans</span> for your seemless
        learning experience
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-3"
            style={{
              padding: "10px",
            }}
          >
            <Card className="box-shadow" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <Card.Title>
                  <ul className="alignList">
                    <li className="theme" style={{ fontSize: "xx-large" }}>
                      $5
                    </li>
                    <li>Pro</li>
                    <li style={{ fontSize: "x-small" }}>Pro level UI kit</li>
                  </ul>
                </Card.Title>
                <Card.Text>
                  <ul className="alignList">
                    <li>Typography System</li>
                    <li>Branding Kit</li>
                    <li>30+ Atoms</li>
                    <li>300+ Varients</li>
                    <li>50+ Molecules</li>
                  </ul>
                </Card.Text>
                <Button
                  style={{
                    width: "150px",
                    backgroundColor: "#FF9F66",
                    border: "none",
                    marginTop: "3%",
                    marginBottom: "3%",
                  }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-md-3"
            style={{
              padding: "10px",
            }}
          >
            <Card className="box-shadow" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <Card.Title>
                  <ul className="alignList">
                    <li className="theme" style={{ fontSize: "xx-large" }}>
                      $2
                    </li>
                    <li>basic</li>
                    <li style={{ fontSize: "x-small" }}>Entry level UI kit</li>
                  </ul>
                </Card.Title>
                <Card.Text>
                  <ul className="alignList">
                    <li>Typography System</li>
                    <li>Branding Kit</li>
                    <li>30+ Atoms</li>
                    <li>300+ Varients</li>
                    <li style={{ color: "darkgray" }}>50+ Molecules</li>
                  </ul>
                </Card.Text>
                <Button
                  style={{
                    width: "150px",
                    backgroundColor: "#FF9F66",
                    border: "none",
                    marginTop: "3%",
                    marginBottom: "3%",
                  }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div
            className="col-md-3"
            style={{
              padding: "10px",
            }}
          >
            <Card className="box-shadow" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <Card.Title>
                  <ul className="alignList">
                    <li className="theme" style={{ fontSize: "xx-large" }}>
                      $0
                    </li>
                    <li>Free</li>
                    <li style={{ fontSize: "x-small" }}>Free UI kit</li>
                  </ul>
                </Card.Title>
                <Card.Text>
                  <ul className="alignList">
                    <li>Typography System</li>
                    <li>Branding Kit</li>
                    <li style={{ color: "darkgray" }}>30+ Atoms</li>
                    <li style={{ color: "darkgray" }}>300+ Varients</li>
                    <li style={{ color: "darkgray" }}>50+ Molecules</li>
                  </ul>
                </Card.Text>
                <Button
                  style={{
                    width: "150px",
                    backgroundColor: "#FF9F66",
                    border: "none",
                    marginTop: "3%",
                    marginBottom: "3%",
                  }}
                >
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
