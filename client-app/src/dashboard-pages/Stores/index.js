import React, { useContext, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import StoreList from "../../components/StoreList";

import { Context as StoresContext } from "./../../contexts/storeContext";

const Stores = ({ setShowModal, mediaQuery }) => {
  const {
    state: { stores, loading },
    fetchAllStores,
    removeStore,
  } = useContext(StoresContext);

  useEffect(() => {
    fetchAllStores(stores);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Container className="mb-5">
        <Row>
          <Col>
            <h5
              className={`${
                mediaQuery === "isMobile" && "ml-4"
              } dashboard-header mb-5`}
            >
              {" "}
              Stores
            </h5>
          </Col>
        </Row>

        <StoreList
          stores={stores.sort((a, b) => a.id - b.id)}
          setShowModal={setShowModal}
          removeStore={removeStore}
          mediaQuery={mediaQuery}
          loading={loading}
        />
      </Container>
    </>
  );
};

export default Stores;
