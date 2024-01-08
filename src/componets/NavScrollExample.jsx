import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginSection from "./LogInSection";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React, { useState } from "react";

function NavScrollExample() {
  const [showLogin, setShowLogin] = useState(false);

  const bouttonStyle = {
    borderColor: "white",
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    <Router>
      <div className="bg-dark text-light">
        <Navbar expand="lg" className="navbarr text-light">
          <Container fluid>
            <Navbar.Brand href="#" className="text-light">
              Andrawis Rent
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 text-light"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link
                  as={Link}
                  to={"/Home"}
                  className="text-light"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "darkblue";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  Home
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/Home"}
                  className="text-light"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "darkblue";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  About
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to={"/Home"}
                  className="text-light"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "darkblue";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  Cars
                </Nav.Link>

                <Nav.Link
                  as={Link}
                  to="#"
                  onClick={toggleLogin}
                  className="text-light"
                  style={{ borderRadius: "40px" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "darkblue";
                    e.target.style.color = "#fff";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "";
                    e.target.style.color = "";
                  }}
                >
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {showLogin && <LoginSection />}
      </div>
    </Router>
  );
}

export default NavScrollExample;

<Nav.Link
  as={Link}
  to={"/Home"}
  className="text-light"
  style={{ borderRadius: "40px" }}
  onMouseOver={(e) => {
    e.target.style.backgroundColor = "darkblue";
    e.target.style.color = "#fff";
  }}
  onMouseOut={(e) => {
    e.target.style.backgroundColor = "";
    e.target.style.color = "";
  }}
>
  Home
</Nav.Link>;
