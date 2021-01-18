import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { WEBSITE_DEV_URL, WEBSITE_PROD_URL } from "../../util/constants";

function NavbarCustom(props) {
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <NavLink
          onClick={() => {
            window.location.replace(
              `${
                process.env.NODE_ENV === "development"
                  ? WEBSITE_DEV_URL
                  : WEBSITE_PROD_URL
              }`
            );
          }}
        >
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <NavLink
                onClick={() => {
                  window.location.replace(
                    `${
                      process.env.NODE_ENV === "development"
                        ? WEBSITE_DEV_URL
                        : WEBSITE_PROD_URL
                    }`
                  );
                }}
              >
                <span className="nav-link">Products</span>
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
