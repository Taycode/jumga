import React, { Suspense, useEffect, useState } from "react";
import { requireAuth, useAuth } from "../../util/auth";
import { Switch, Route } from "./../../util/router";
import { Redirect } from "react-router-dom";
import NotFoundPage from "../not-found";
import SideBar from "../../components/Sidebar";
import DashboardContainer from "../../components/DashboardContainer";
import Modal from "../../components/Modal";
import { Button, Container, Row } from "react-bootstrap";
import PageLoader from "../../components/PageLoader";
import appRoutes from "../../util/dashboard-routes";
import useMedia from "../../util/useQuery";
import allModals from "./helper";
import { MAKE_PAYMENT, SELLER_VERIFY_AMOUNT } from "../../util/constants";

import { toast } from "react-toastify";
import { getCurrency } from "../../util/helper-functions";

toast.configure({
  autoClose: 3000,
  hideProgressBar: true,
});

const DashboardPage = () => {
  const { user, setUser, logout } = useAuth();
  const { verified } = user;

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

  useEffect(() => {
    user.role === "seller" &&
      !verified &&
      setShowModal({
        show: true,
        modalId: MAKE_PAYMENT,
        data: {
          userData: user,
          setUser,
        },
      });
  }, [user]);

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
                  {((user.role === "seller" && verified) ||
                    user.role === "rider") &&
                    appRoutes[user.role.toUpperCase()]?.map((route) => {
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
                              mediaQuery={mediaQuery}
                            />
                          )}
                        />
                      );
                    })}

                  {user.role === "seller" && !verified && (
                    <div className="m-5 text-center alert-warning alert">
                      <p>
                        You account has not been verified. You need to pay{" "}
                        {getCurrency("uk")}
                        {SELLER_VERIFY_AMOUNT} to get your account verified, so
                        you could start sellingt your products. <br />
                      </p>
                      <Button
                        className="text-dark text-decoration-none"
                        variant="link"
                        onClick={() =>
                          setShowModal({
                            show: true,
                            modalId: MAKE_PAYMENT,
                            data: {
                              userData: user,
                              setUser,
                            },
                          })
                        }
                      >
                        {" "}
                        Get Verified Now{" "}
                      </Button>
                    </div>
                  )}
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
