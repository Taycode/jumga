import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SectionHeader from "./SectionHeader";
import Image from "react-bootstrap/Image";
import "./Features.scss";

function Features(props) {
  return (
    <div className="Features">
      {props.items.map((item, index) => (
        <Row className="align-items-center" key={index}>
          <Col xs={12} lg={6}>
            <SectionHeader
              title={item.title}
              subtitle={item.description}
              spaced={true}
              size={3}
              className="text-center text-lg-left"
            />
          </Col>
          <Col>
            <figure className="Features__image-container">
              <Image src={item.image} alt={item.title} fluid={true} />
            </figure>
          </Col>
        </Row>
      ))}
    </div>
  );
}

export default Features;
