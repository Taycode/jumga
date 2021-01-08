import React from "react";
import "./styles.scss";
import { Link, useRouter } from "../../util/router";
import { getCurrency, handleAddToCart } from "../../util/helper-functions";
import { getRating } from "./helper";
import { CLOUDINARY_IMAGE_PREPEND } from "./../../util/constants";

const ProductCard = ({
  product: { images, name, price, country, rating, id },
}) => {
  const router = useRouter();

  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="product-grid">
          <div className="product-image">
            <Link to={`/product/${id}`}>
              <img
                className="pic-1"
                alt={name}
                src={`${CLOUDINARY_IMAGE_PREPEND}${images[0].image}`}
              />
              <img
                className="pic-2"
                alt={name}
                src={`${CLOUDINARY_IMAGE_PREPEND}${images[1].image}`}
              />
            </Link>
            <ul className="social">
              <li onClick={() => router.push(`/product/${id}`)}>
                <span data-tip="View Product">
                  <i className="fa fa-eye"></i>
                </span>
              </li>

              <li onClick={() => handleAddToCart(id)}>
                <span data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </span>
              </li>
            </ul>
            {/* <span className="product-new-label">Sale</span> */}
            {/* <span className="product-discount-label">20%</span> */}
          </div>
          <ul className="rating">{getRating(rating)}</ul>
          <div className="product-content">
            <h3 className="title">
              <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <div className="price mb-3">
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
