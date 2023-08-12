import React from "react";
import { Button } from "react-bootstrap";

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "#F5F6F9",
        textAlign: "center",
        paddingTop: "5%",
        paddingBottom: "5%",
      }}
    >
      <h1 style={{fontWeight:"600"}}>Contact US</h1>
      <h2>Request More Information</h2>
      <Button className="margin-top"
        style={{
          width: "150px",
          backgroundColor: "rgb(80, 200, 220)",
          border: "none",
        }}
      >
        Contact US
      </Button>
    </div>
  );
}

export default Contact;
