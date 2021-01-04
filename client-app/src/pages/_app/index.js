import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import NotFoundPage from "../not-found";
import AuthPage from "../auth";
import { ProvideAuth } from "./../../util/auth";
import DashboardPage from "../dashboard";
import { Redirect } from "react-router-dom";
import ContextProvider from "../../contexts/ContextProviders";

function App() {
  return (
    <>
      <ContextProvider>
        <ProvideAuth>
          <Router>
            <>
              <Switch>
                <Route path="/dashboard" render={() => <DashboardPage />} />

                <Route path="/:authType" component={AuthPage} />

                <Redirect from="/" to="/login" />

                <Route component={NotFoundPage} />
              </Switch>
            </>
          </Router>
        </ProvideAuth>
      </ContextProvider>
    </>
  );
}
export default App;
