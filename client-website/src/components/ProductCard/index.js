import React from "react";
import "./styles.scss";
import { Link, useRouter } from "../../util/router";
import { getCurrency, handleAddToCart } from "../../util/helper-functions";
import { getRating } from "./helper";

const ProductCard = ({
  product: { image1, image2, name, price, country, rating, id },
}) => {
  const router = useRouter();
  return (
    <>
      <div class="col-md-4 col-sm-6">
        <div class="product-grid">
          <div class="product-image">
            <Link to={`/product/${id}`}>
              <img class="pic-1" alt={name} src={image1} />
              <img class="pic-2" alt={name} src={image2} />
            </Link>
            <ul class="social">
              <li onClick={() => router.push(`/product/${id}`)}>
                <span data-tip="View Product">
                  <i class="fa fa-eye"></i>
                </span>
              </li>

              <li onClick={() => handleAddToCart(id)}>
                <span data-tip="Add to Cart">
                  <i class="fa fa-shopping-cart"></i>
                </span>
              </li>
            </ul>
            {/* <span class="product-new-label">Sale</span> */}
            {/* <span class="product-discount-label">20%</span> */}
          </div>
          <ul class="rating">{getRating(rating)}</ul>
          <div class="product-content">
            <h3 class="title">
              <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <div class="price mb-3">
              {getCurrency(country)} {price}
              {/* <span>$20.00</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
