import React from "react";
import "./style.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import operator from "../assets/img/operator.png"

function NavBar() {
  return (
    <div className="container90" style={{ paddingTop: "5px"}}>
      <Navbar expand="lg">
        <Navbar.Brand className="margin-brand" href="#home">
          <img className="responsive" src={operator} alt="logo" 
            style={{width:"2.5rem"}}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form style={{ marginRight: "30px" }} className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
              />
            </Form>
            <Nav.Link className="margin-left-right" href="#DeFi">
              <span>Articles</span>
            </Nav.Link>
            <Nav.Link className="margin-left-right" href="#Blockchain">
              About us
            </Nav.Link>
            <Nav.Link
              className="margin-left-right"
              style={{ marginRight: "20px" }}
              href="#Exchanges"
            >
              Contact us
            </Nav.Link>
            <Button
              style={{
                width: "150px",
                backgroundColor: "rgb(80, 200, 220)",
                border: "none",
              }}
            >
              Join Us
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
