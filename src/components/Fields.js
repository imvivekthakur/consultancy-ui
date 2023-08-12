import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";
import img1 from "../assets/img/1.jpg";

function Courses() {
  const data = [];
  for (let i = 0; i < 6; i++) {
    data.push(
      <div
        className="col-md-4"
        style={{
          padding: "10px",
        }}
      >
        <Card className="box-shadow card-container" style={{ borderRadius: "10px" }}>
          <Card.Img variant="top" src={img1} />
          <Card.Body>
            <Card.Title>Business Planning</Card.Title>
            <Card.Text style={{color:"grey"}}>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
        backgroundColor: "#F5F6F9",
      }}
    >
      <h2 style={{fontSize:"2.8rem", fontWeight:"600", marginBottom:"2%"}} >
        Most <span className="theme">Popular</span> Fields
      </h2>
      <div className="container" style={{fontSize:"0.9rem"}}>
        <div className="row">{data}</div>
      </div>
      <Button className="btn-view"
        style={{
          width: "150px",
          backgroundColor: "rgb(80, 200, 220)",
          border: "none",
          marginTop: "3%",
          fontWeight:"500",
        }}
      >
        View All
      </Button>
    </div>
  );
}

export default Courses;
