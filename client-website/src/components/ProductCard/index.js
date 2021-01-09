import React, { useContext } from "react";
import "./styles.scss";
import { Link, useRouter } from "../../util/router";
import {
  getCurrency,
  handleAddToCart,
  formatMoney,
  handleQuantityChange,
  getCurrentItemQuantity,
} from "../../util/helper-functions";
// import { getRating } from "./helper";
import {
  CLOUDINARY_IMAGE_PREPEND,
  INCREASE,
  DECREASE,
} from "./../../util/constants";
import { Context as CartContext } from "../../contexts/cartContext";

const ProductCard = ({ product }) => {
  const { images, name, price, country, id, rating } = product;
  const router = useRouter();

  const {
    state: { cart },
    addItemToCart,
    updateCartItems,
  } = useContext(CartContext);

  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className="product-grid ">
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

              <li onClick={() => handleAddToCart(product, addItemToCart, cart)}>
                <span data-tip="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </span>
              </li>
            </ul>
            <span className="product-new-label">
              {" "}
              {rating ? rating : 0} <li className="fa fa-star"></li>{" "}
            </span>
            {/* <span className="product-discount-label">20%</span> */}
          </div>
          {/* <ul className="rating">{getRating(rating)}</ul> */}
          <div className="product-content pb-5">
            <h3 className="title">
              <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <div className="price mb-3">
              {getCurrency(country)} {formatMoney(price)}
              {/* <span>$20.00</span> */}
            </div>
            <div className="price mb-3">
              <div className="btn-group" role="group">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      DECREASE,
                      product,
                      cart,
                      addItemToCart,
                      updateCartItems
                    )
                  }
                  type="button"
                  className="btn btn-secondary btn-sm"
                >
                  -
                </button>
                <button type="button" className="btn btn-sm btn-light">
                  {getCurrentItemQuantity(product, cart)}
                </button>
                <button
                  onClick={() =>
                    handleQuantityChange(
                      INCREASE,
                      product,
                      cart,
                      addItemToCart,
                      updateCartItems
                    )
                  }
                  type="button"
                  className="btn btn-secondary btn-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
