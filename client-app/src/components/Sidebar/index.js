import React, { useState } from "react";
import { Nav, NavItem, Col, Button } from "react-bootstrap";
import { Link, useHistory } from "../../util/router";
import jumga_logo from "../../assets/img/logo-white.png";
import menuIcon from "../../assets/img/menu.png";
import closeMenuIcon from "../../assets/img/close.png";
import routes from "../../util/dashboard-routes";
import "./Sidebar.scss";

const SideBar = ({ role, mediaQuery, logout }) => {
  const hist = useHistory();

  const [showSidebar, setShowSidebar] = useState(
    mediaQuery === "isDesktop" ? true : false
  );

  const {
    location: { pathname },
  } = hist;

  const activeRoute = (routeName) => {
    return pathname.indexOf(routeName) > -1 ? "sidebar-active" : "";
  };

  return (
    <>
      {!showSidebar && (
        <div className="shadow ">
          <img
            src={menuIcon}
            className="sidbar-toggler"
            onClick={() => setShowSidebar(true)}
            alt="nav-toggle-icon"
          />
        </div>
      )}
      {showSidebar && (
        <>
          <Col className=" side-bar" md={2} sm={1}>
            {mediaQuery !== "isDesktop" && (
              <img
                alt="nav-toggle-icon"
                src={closeMenuIcon}
                className="sidbar-toggler close-icon "
                onClick={() => setShowSidebar(false)}
              />
            )}
            <div className="sidebar-logo-container mt-3">
              <Link to="/">
                <img
                  alt="Haulr Logo"
                  className="img-fluid sidebar--logo "
                  src={jumga_logo}
                />
              </Link>
            </div>
            <Nav className="sidebar-nav flex-column">
              {routes[role.toUpperCase()].map((route, i) => (
                <React.Fragment key={route.path}>
                  {!route.slug ? (
                    <NavItem
                      onClick={() =>
                        mediaQuery !== "isDesktop" && setShowSidebar(false)
                      }
                      className={`sidebar-nav-item text-decoration-none  ${activeRoute(
                        route.path
                      )}`}
                    >
                      <img
                        className="sidebar-icon img-fluid"
                        src={route.getLinkIcon(activeRoute(route.path), i)}
                        alt="Nav-icon"
                      />
                      <Link
                        className={` sidebar-nav-link text-decoration-none ${activeRoute(
                          route.path
                        )}`}
                        to={`/dashboard${route.path}`}
                      >
                        <span>{route.name}</span>
                      </Link>
                    </NavItem>
                  ) : null}
                </React.Fragment>
              ))}
              <Button
                onClick={() => logout()}
                className="buttom-nav-link btn-white request-truck-btn btn"
              >
                Log Out
              </Button>
            </Nav>
          </Col>
        </>
      )}
    </>
  );
};

export default SideBar;
