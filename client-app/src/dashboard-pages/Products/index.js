import React, { useEffect, useContext } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import SearchProducts from "../../components/SearchProducts";
import { ADD_PRODUCT } from "../../util/constants";
import "./styles.scss";
import ProductList from "../../components/ProductList";
import { Context as ProductsContext } from "./../../contexts/productContext";
import { Context as StoreContext } from "./../../contexts/storeContext";

const Products = ({ setShowModal, mediaQuery }) => {
  const {
    state: { products, loading },
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
              Products
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="products-top-section">
              {mediaQuery !== "isMobile" && <SearchProducts />}
              <div>
                <Button
                  onClick={() => {
                    if (stores && stores.length > 0) {
                      return setShowModal({
                        show: true,
                        modalId: ADD_PRODUCT,
                        data: {},
                      });
                    }
                    return alert(
                      "You have not created a store! You need to have a store first !"
                    );
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
          products={products.sort((a, b) => a.id - b.id)}
          setShowModal={setShowModal}
          removeproduct={removeProduct}
          loading={loading}
        />
      </Container>
    </>
  );
};

export default Products;
