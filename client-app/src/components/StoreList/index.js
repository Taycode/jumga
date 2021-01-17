import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { storeListTableHeader } from "./helper";
import { ADD_STORE } from "../../util/constants";
import StoreItem from "../StoreItem";
import PageLoader from "../PageLoader";
import "./styles.scss";

const StoreList = ({
  loading,
  setShowModal,
  stores,
  removeStore,
  mediaQuery,
}) => {
  return (
    <>
      <Row>
        <Col>
          <Card className="  store-list shadow">
            <div className="search-section">
              {mediaQuery === "isDesktop" && (
                <div>
                  <span> All Stores</span>
                </div>
              )}
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
                {mediaQuery === "isDesktop" && (
                  <input
                    className="d-block"
                    placeholder="Search..."
                    name="search"
                  />
                )}
              </div>
            </div>

            {mediaQuery !== "isMobile" && (
              <Row className="overflow-auto">
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
            )}

            <Row className="  store-list__items-section">
              {loading ? (
                <Col>
                  {" "}
                  <PageLoader />{" "}
                </Col>
              ) : (
                <>
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
                      Create a store to get started !
                    </Col>
                  )}
                </>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StoreList;
