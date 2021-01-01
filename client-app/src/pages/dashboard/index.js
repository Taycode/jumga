import React, { Suspense, useState } from "react";
// import { requireAuth, useAuth } from "../../util/auth";
import { Switch, Route } from "./../../util/router";
import { Redirect } from "react-router-dom";
import NotFoundPage from "../not-found";
import SideBar from "../../components/Sidebar";
import DashboardContainer from "../../components/DashboardContainer";
import Modal from "../../components/Modal";
import { Container, Row } from "react-bootstrap";
import PageLoader from "../../components/PageLoader";
import appRoutes from "../../util/dashboard-routes";
import useMedia from "../../util/useQuery";
import allModals from "./helper";

const DashboardPage = (props) => {
  const [showModal, setShowModal] = useState({
    modalId: " ",
    show: false,
    data: {},
  });

  const role = "seller";

  const queries = [
    "(min-width: 1024px)", // isDesktop
    "(min-width: 768px)", // isTab
    "(min-width: 310px)", // isMobile
  ];
  const queryValues = ["isDesktop", "isTab", "isMobile"];
  const mediaQuery = useMedia(queries, queryValues, "isDesktop");

  return (
    <>
      <Container fluid>
        {
          <Row>
            <SideBar mediaQuery={mediaQuery} role={role} />
            <DashboardContainer mediaQuery={mediaQuery}>
              {showModal.show && (
                <Modal showModal={showModal} setShowModal={setShowModal}>
                  <Suspense fallback={<PageLoader />}>
                    {allModals[showModal.modalId](
                      setShowModal,
                      showModal?.data
                    )}
                  </Suspense>
                </Modal>
              )}
              <Suspense fallback={<PageLoader />}>
                <Switch>
                  {appRoutes[role.toUpperCase()]?.map((route) => {
                    const Component = route.component;
                    return (
                      <Route
                        key={route.route}
                        path={`/dashboard${route.path}`}
                        render={(routeProps) => (
                          <Component
                            setShowModal={setShowModal}
                            {...routeProps}
                          />
                        )}
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
