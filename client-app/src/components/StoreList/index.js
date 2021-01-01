import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./styles.scss";
import { storeListTableHeader, samplestoreData } from "./helper";
import { ADD_STORE } from "../../util/constants";
import StoreItem from "../StoreItem";

const StoreList = ({ setShowModal }) => {
  return (
    <>
      <Row>
        <Col>
          <Card className=" store-list shadow">
            <div className="search-section">
              <div>
                <span> All Stores</span>
              </div>
              <div>
                <Button
                  onClick={() => {
                    setShowModal({
                      show: true,
                      modalId: ADD_STORE,
                    });
                  }}
                  className="btn-info btn-sm "
                >
                  {" "}
                  + Add Store{" "}
                </Button>
                <input placeholder="Search..." name="search" />
              </div>
            </div>

            <Row>
              {storeListTableHeader.map((tableHeader) => (
                <Col
                  className="store-list__header"
                  key={tableHeader.title}
                  md={tableHeader.width}
                >
                  {" "}
                  {tableHeader.title}
                </Col>
              ))}
            </Row>
            <Row className="store-list__items-section">
              {samplestoreData.map((store) => (
                <StoreItem key={store.id} store={store} />
              ))}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StoreList;
