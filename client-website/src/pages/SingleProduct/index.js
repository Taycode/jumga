import React, { useEffect, useState } from "react";
import Section from "../../components/Section";
import SingleProduct from "../../components/SingleProduct";
import { sampleProducts } from "../../util/static-data";
import PageLoader from "../../components/PageLoader";

const SingleProductPage = ({
  match: {
    params: { productId },
  },
}) => {
  //   alert(productId);
  return (
    <Section>
      <SingleProduct product={sampleProducts[0]} />
    </Section>
  );
};

export default SingleProductPage;
