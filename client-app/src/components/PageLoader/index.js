import React from "react";
import Spinner from "react-bootstrap/Spinner";

function PageLoader(props) {
  return (
    <section
      style={{ height: "400px" }}
      className=" py-5 position-relative bg-white d-flex justify-content-center align-items-center"
    >
      <div>
        <Spinner animation="border" variant="primary"></Spinner>
      </div>
    </section>
  );
}

export default PageLoader;
