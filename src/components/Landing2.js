import React from "react";
import "./style.css";
import { Card, Button } from "react-bootstrap";

function Landing2() {
  const data = [
    {
      title: "Strategic Planning",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
    },
    {
      title: "Business Development",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
    },
    {
      title: "Consulting Solution",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia",
    },
  ];

  const cards = data.map((item, i) => {
    return (
      <p
        className="col-md-4"
        style={{
          padding: "10px",
        }}
        key={i}
      >
        <Card className="box box-shadow card-container" style={{ borderRadius: "20px" }}>
          <Card.Body style={{ height: "250px"}}>
            <Card.Title style={{ fontSize: "1.3rem", paddingTop:"4px"}}>{item.title}</Card.Title>
            <Card.Text style={{color:"grey", fontSize:"0.9rem"}}>{item.description}</Card.Text>
            <Button className="margin-top card-btn"
              style={{
                width: "150px",
                backgroundColor: "rgb(80, 200, 220)",
                border: "none",
              }}
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </p>
    );
  });

  return (
    <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "5%" }}>
      <h2 className='header' >
        How <span className="theme">DigitalEdge</span> Helps You
      </h2>
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </div>
  );
}

export default Landing2;
