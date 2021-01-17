import React from "react";
import emptyProducts from "../../assets/img/empty.svg";
import emptyOrder from "../../assets/img/empty-order.svg";
import "./styles.scss";

const Emptycomponent = ({ type }) => {
  return (
    <div className="m-auto text-center p-4">
      <img
        className="empty"
        src={type === "ORDER" ? emptyOrder : emptyProducts}
      />
      <div className="empty-text">
        <h6> No {type === "ORDER" ? "order here !" : "products yet !"} </h6>
        {type === "PRODUCTS" && <p> Please check back later !</p>}
      </div>
    </div>
  );
};

export default Emptycomponent;
