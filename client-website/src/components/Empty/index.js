import React from "react";
import empty from "../../assets/img/empty.svg";
import "./styles.scss";

const Emptycomponent = () => {
  return (
    <div className="m-auto text-center p-4">
      <img className="empty" src={empty} />
      <div className="empty-text">
        <h6> No products yet !</h6>
        <p> Please check back later !</p>
      </div>
    </div>
  );
};

export default Emptycomponent;
