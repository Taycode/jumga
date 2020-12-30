import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Clients(props) {
  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col md="auto" className="py-3 px-4" key={index}>
          <div className="align-bottom">
            <img src={item.image} width={item.width} alt={item.name} />
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Clients;
