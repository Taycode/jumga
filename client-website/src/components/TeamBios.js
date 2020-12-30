import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Avatar from "./Avatar";

function TeamBios(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          xs={12}
          md={6}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card>
            <Card.Body className="d-flex flex-column text-center align-items-center p-4">
              <Avatar src={item.avatar} alt={item.name} size="128px" />
              <h6 className="font-weight-bold mb-0 mt-4">{item.name}</h6>
              <small>{item.role}</small>
              <Card.Text className="mt-4">{item.bio}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamBios;
