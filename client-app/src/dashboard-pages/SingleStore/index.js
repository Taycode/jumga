import React, { useContext, useEffect, useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import { Context as ProductsContext } from "./../../contexts/productContext";
import { Context as StoreContext } from "./../../contexts/storeContext";
import { getStoreProducts, getStoreName } from "./helper";
import ProductList from "../../components/ProductList";
import SearchProducts from "../../components/SearchProducts";
import { ADD_PRODUCT } from "../../util/constants";
import "./styles.scss";

const SingleStore = (props) => {
  const {
    setShowModal,
    match: {
      params: { id },
    },
  } = props;

  const {
    state: { products },
    fetchAllProducts,
    removeProduct,
  } = useContext(ProductsContext);

  const {
    state: { stores },
    fetchAllStores,
  } = useContext(StoreContext);

  useEffect(() => {
    fetchAllProducts(products);
    fetchAllStores(stores);
  }, []);

  useEffect(() => {
    setStore(getStoreName(stores, id));
  }, [stores, id]);

  const [storeProducts, setStoreProducts] = useState([]);
  const [store, setStore] = useState();

  useEffect(() => {
    products && id && setStoreProducts(getStoreProducts(products, id));
  }, [id, products]);

  return (
    <>
      {store ? (
        <Container className="mb-5">
          <Row>
            <Col>
              <h5 className="dashboard-header mb-5"> {store.name} </h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="products-top-section">
                <SearchProducts />
                <div>
                  <Button
                    onClick={() => {
                      setShowModal({
                        show: true,
                        modalId: ADD_PRODUCT,
                        data: {
                          productData: {
                            storeId: id,
                          },
                        },
                      });
                    }}
                    className="btn-info btn-sm d-block"
                  >
                    + Add Product
                  </Button>
                </div>
              </div>
            </Col>
          </Row>

          <ProductList
            products={storeProducts}
            setShowModal={setShowModal}
            removeproduct={removeProduct}
          />
        </Container>
      ) : (
        <Container>
          <Row>
            <Col>
              <p className="p-5  mt-5"> Store does not exist</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingleStore;
