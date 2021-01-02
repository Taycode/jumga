import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import OverviewCard from "../../components/OverviewCard";
import GraphSection from "../../components/GraphSection";
import "./styles.scss";

const OverviewPage = ({ user }) => {
  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Overview</h5>
          </Col>
        </Row>
        <OverviewCard user={user} />
        <GraphSection />
      </Container>
    </>
  );
};

export default OverviewPage;
