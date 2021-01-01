import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { chartOptions, data } from "./helper";
import "./styles.scss";

const GraphSection = ({ graphData, role }) => {
  return (
    <>
      <Card className="shadow graph-card">
        <Row>
          <Col>
            <div className="d-flex  justify-content-between">
              <h3 className="inline-block">
                {" "}
                <small> Earnings Summary</small>{" "}
              </h3>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <div className="chart-area">
              <Line
                data={(c) => data(c, [200, 100, 300, 3000])}
                options={chartOptions}
              />
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GraphSection;
