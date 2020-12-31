// import React, { useState, Suspense, useEffect, useContext } from "react";
import { Container, Row } from "react-bootstrap";
import PageLoader from "../../components/PageLoader";
// import appRoutes from

const DashboardPage = (props) => {
  return (
    <>
      <Container fluid>
        <PageLoader />
      </Container>
    </>
  );
};

export default DashboardPage;
