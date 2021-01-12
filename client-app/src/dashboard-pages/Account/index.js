import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileForm from "../../components/ProfileForm";

const Account = ({ user, mediaQuery }) => {
  return (
    <>
      {" "}
      <Container className="mb-5">
        <Row>
          <Col>
            <h5
              className={`${
                mediaQuery === "isMobile" && "ml-4"
              } dashboard-header mb-5`}
            >
              {" "}
              Account
            </h5>
          </Col>
        </Row>

        <ProfileForm user={user} />
      </Container>
    </>
  );
};

export default Account;
