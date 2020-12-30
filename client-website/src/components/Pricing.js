import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";
import { useAuth } from "./../util/auth.js";
import "./Pricing.scss";

function Pricing(props) {
  const auth = useAuth();

  return (
    <Row className="justify-content-center">
      {props.items.map((item, index) => (
        <Col
          md={12}
          lg={4}
          className="py-3 d-flex align-items-stretch"
          key={index}
        >
          <Card className="w-100">
            <Card.Body className="d-flex flex-column p-4">
              <h5 className="font-weight-bold mb-4">{item.name}</h5>
              <h1 className="font-weight-bold mb-3">
                ${item.price}
                <small className="Pricing__period">/mo</small>
              </h1>

              {item.description && (
                <Card.Text className="mb-4">{item.description}</Card.Text>
              )}

              {item.perks && (
                <Card.Text className="mt-2">
                  <ul className="list-unstyled">
                    {item.perks.map((perk, index) => (
                      <li className="py-1" key={index}>
                        <i className="fas fa-check text-success mr-3" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  {item.description}
                </Card.Text>
              )}

              <LinkContainer
                to={
                  auth.user
                    ? `/purchase/${item.id}`
                    : `/auth/signup?next=/purchase/${item.id}`
                }
              >
                <Button
                  variant="primary"
                  size="lg"
                  block={true}
                  className="mt-auto"
                >
                  {props.buttonText}
                </Button>
              </LinkContainer>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Pricing;
