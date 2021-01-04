import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./styles.scss";
import { storeListTableHeader } from "./helper";
import { ADD_STORE } from "../../util/constants";
import StoreItem from "../StoreItem";

const StoreList = ({ setShowModal, stores, removeStore }) => {
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
                      data: {},
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
                  key={tableHeader.id}
                  md={tableHeader.width}
                >
                  {" "}
                  {tableHeader.title}
                </Col>
              ))}
            </Row>

            <Row className="store-list__items-section">
              {stores && stores.length > 0 ? (
                <>
                  {stores.map((store) => (
                    <StoreItem
                      setShowModal={setShowModal}
                      key={store.id}
                      store={store}
                      removeStore={removeStore}
                    />
                  ))}
                </>
              ) : (
                <Col className="text-center p-5">
                  Create a store to get started
                </Col>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StoreList;
