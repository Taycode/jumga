import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoreList from "../../components/StoreList";

import { Context as StoresContext } from "./../../contexts/storeContext";

const Stores = ({ setShowModal }) => {
  const {
    state: { stores },
    fetchAllStores,
    removeStore,
  } = useContext(StoresContext);

  useEffect(() => {
    fetchAllStores();
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5 className="dashboard-header mb-5"> Stores</h5>
          </Col>
        </Row>

        <StoreList
          stores={stores.sort((a, b) => a.id - b.id)}
          setShowModal={setShowModal}
          removeStore={removeStore}
        />
      </Container>
    </>
  );
};

export default Stores;
