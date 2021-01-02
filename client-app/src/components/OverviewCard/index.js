import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./styles.scss";
import StatCard from "../StatCard";

const statHeadings = ["Stores", "Products", "Sales", "Balance", "Earnings"];

const OverviewCard = ({ user }) => {
  const { first_name } = user;
  return (
    <Row>
      <Col>
        <Card className="overview-card shadow">
          <div className="overview-card__header">
            <h6>Hi {first_name},</h6>{" "}
            <span> This is your summary for November</span>
          </div>

          <div className="overview-card__stats-section">
            {statHeadings.map((heading, i) => {
              return <StatCard heading={heading} key={i} />;
            })}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default OverviewCard;
