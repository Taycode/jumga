import React, { useContext, useEffect } from "react";
import Section from "../../components/Section";
import { Col, Row, Button } from "react-bootstrap";
import AllProducts from "../../components/AllProducts";
import SearchProducts from "../../components/SearchProducts";
import "./styles.scss";
import { useRouter } from "../../util/router";
import { Context as ProductsContext } from "./../../contexts/productsContext";
import { Context as CartContext } from "./../../contexts/cartContext";
import PageLoader from "../../components/PageLoader";
import Emptycomponent from "../../components/Empty";
import { useIpData } from "../../util/useIpData";

const ProductsPage = ({ mediaQuery }) => {
  const router = useRouter();
  const ipAddress = useIpData();

  const {
    state: { products, loading },
    fetchAllProducts,
  } = useContext(ProductsContext);

  const { fetchCartItems } = useContext(CartContext);

  useEffect(() => {
    fetchAllProducts(products, ipAddress);
    fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ipAddress]);

  return (
    <>
      <Section className="p-3">
        <Row>
          <Col md={2}>
            <div className="products-page-side">
              <SearchProducts />
              {mediaQuery !== "isMobile" && (
                <div className="filter-section">
                  <span className="filter-section__title"> Filter by</span>
                </div>
              )}
              <Button
                onClick={() => router.push("/cart")}
                className="btn-sm btm-btn"
                variant="primary"
              >
                <i className="fa fa-shopping-cart"></i> View Cart
              </Button>
            </div>
          </Col>
          <Col md={10}>
            {loading ? (
              <PageLoader />
            ) : (
              <>
                {products && products.length === 0 ? (
                  <Emptycomponent type="PRODUCTS" />
                ) : (
                  <AllProducts
                    products={products.sort((a, b) => b.id - a.id)}
                  />
                )}
              </>
            )}
          </Col>
        </Row>
      </Section>
    </>
  );
};

export default ProductsPage;
