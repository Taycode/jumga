import React, { useContext, useEffect, useState } from "react";
import Section from "../../components/Section";
import SingleProduct from "../../components/SingleProduct";
import { Context as ProductsContext } from "../../contexts/productsContext";
import { Context as CartContext } from "../../contexts/cartContext";

const SingleProductPage = ({
  match: {
    params: { productId },
  },
}) => {
  const {
    state: { products },
    fetchAllProducts,
  } = useContext(ProductsContext);

  const { fetchCartItems } = useContext(CartContext);

  const [product, setProduct] = useState(false);

  useEffect(() => {
    fetchAllProducts(products);
    fetchCartItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Extract this shiii
    products &&
      setProduct(
        products.find((product) => parseInt(product.id) === parseInt(productId))
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [products]);

  return (
    <Section className="p-3">
      {product && <SingleProduct product={product} />}
    </Section>
  );
};

export default SingleProductPage;
