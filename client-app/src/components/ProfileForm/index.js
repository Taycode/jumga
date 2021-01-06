import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { PROFILE_SECTIONS, renderProfileComponent } from "./helper";
import "./styles.scss";

const ProfileForm = ({ user }) => {
  const [active, setActive] = useState(PROFILE_SECTIONS[0].slug);

  return (
    <>
      <Row>
        <Col>
          <Card className=" profile-card shadow">
            <Row>
              <Col className="side-border" md={3}>
                <ul className="profile-sections-nav">
                  {PROFILE_SECTIONS.map((section) => (
                    <li
                      className={
                        active === section.slug ? "active-section" : ""
                      }
                      onClick={() => {
                        setActive(section.slug);
                      }}
                      key={section.key}
                    >
                      {section.name}{" "}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col md={9}>{renderProfileComponent(active, user)}</Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProfileForm;
