import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProfileForm from "../../components/ProfileForm";

const Account = ({ user }) => {
  return (
    <>
      {" "}
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Account</h5>
          </Col>
        </Row>

        <ProfileForm user={user} />
      </Container>
    </>
  );
};

export default Account;
