import React from "react";
import "./styles.scss";
import { Link, useRouter } from "../../util/router";
import { getCurrency } from "../../util/helper-functions";
import { getRating } from "./helper";

const ProductCard = ({
  product: { image1, image2, name, price, country, rating, id },
}) => {
  const router = useRouter();
  return (
    <>
      <div className="col-md-4 col-sm-6">
        <div className=" shadow product-grid">
          <div className="product-image">
            <Link to={`/dashboard/product/${id}`}>
              <img className="pic-1" alt={name} src={image1} />
              <img className="pic-2" alt={name} src={image2} />
            </Link>
            <ul className="social">
              <li onClick={() => router.push(`/dashboard/product/${id}`)}>
                <span data-tip="View Product">
                  <i className="fa fa-eye"></i>
                </span>
              </li>

              <li onClick={() => {}}>
                <span data-tip="Edit Product">
                  <i className="fa fa-edit"></i>
                </span>
              </li>

              <li onClick={() => {}}>
                <span data-tip="Delete Product">
                  <i className="fa fa-trash"></i>
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
