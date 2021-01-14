import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { formatStatsArray, statHeadings } from "./helper";
import "./styles.scss";
import StatCard from "../StatCard";

const OverviewCard = ({ user }) => {
  const { first_name, role } = user;
  const [stats, setStats] = useState(false);

  useEffect(() => {
    user && setStats(formatStatsArray(user));
  }, [user]);
  return (
    <Row>
      <Col>
        <Card className="overview-card shadow">
          <div className="overview-card__header">
            <h6>Hi {first_name},</h6>{" "}
            <span> This is your summary for November</span>
          </div>

          <div className="overview-card__stats-section">
            {statHeadings[role.toUpperCase()].map((heading, i) => {
              return (
                <StatCard
                  stat={stats[i] ? stats[i] : 0}
                  heading={heading}
                  key={i}
                />
              );
            })}
          </div>
        </Card>
      </Col>
    </Row>
  );
};

export default OverviewCard;
