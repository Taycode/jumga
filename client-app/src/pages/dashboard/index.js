import React, { useState, Suspense, useEffect, useContext } from "react";
import { requireAuth, useAuth } from "../../util/auth";
import { Switch, Route } from "./../../util/router";
import { Redirect } from "react-router-dom";
import NotFoundPage from "../not-found";
// import SideBar from "../../components/Sidebar";
import DashboardContainer from "../../components/DashboardContainer";
import { Container, Row } from "react-bootstrap";
import PageLoader from "../../components/PageLoader";
import appRoutes from "../../util/dashboard-routes";

const DashboardPage = ({ mediaQuery, ...props }) => {
  const role = "seller";

  return (
    <>
      <Container fluid>
        {
          <Row>
            {/* <SideBar /> */}
            <DashboardContainer>
              <Suspense fallback={<PageLoader />}>
                <Switch>
                  {appRoutes[role.toUpperCase()]?.map((route) => {
                    const Component = route.component;
                    return (
                      <Route
                        key={route.route}
                        path={`/dashboard${route.path}`}
                        render={(routeProps) => <Component {...routeProps} />}
                      />
                    );
                  })}
                  <Redirect from="/dashboard" to="/dashboard/overview" />

                  <Route path="*" render={() => <NotFoundPage />} />
                </Switch>
              </Suspense>
            </DashboardContainer>
          </Row>
        }

        {/* <PageLoader /> */}
      </Container>
    </>
  );
};

export default DashboardPage;
