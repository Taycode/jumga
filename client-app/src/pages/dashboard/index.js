import React, { Suspense, useState } from "react";
import { requireAuth, useAuth } from "../../util/auth";
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

import { toast } from "react-toastify";

toast.configure({
  autoClose: 3000,
  hideProgressBar: true,
});

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const [showModal, setShowModal] = useState({
    modalId: " ",
    show: false,
    data: {},
  });

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
        {user ? (
          <Row>
            <SideBar mediaQuery={mediaQuery} role={user.role} logout={logout} />
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
                  {appRoutes[user.role.toUpperCase()]?.map((route) => {
                    const Component = route.component;
                    return (
                      <Route
                        key={route.path}
                        path={`/dashboard${route.path}`}
                        render={(routeProps) => (
                          <Component
                            setShowModal={setShowModal}
                            {...routeProps}
                            user={user}
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
        ) : (
          <PageLoader />
        )}
      </Container>
    </>
  );
};

export default requireAuth(DashboardPage);
