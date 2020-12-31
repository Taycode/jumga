import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import NotFoundPage from "../not-found";
import AuthPage from "../auth";
import { ProvideAuth } from "./../../util/auth";
import DashboardPage from "../dashboard";

function App() {
  return (
    <>
      <ProvideAuth>
        <Router>
          <>
            <Switch>
              <Route path="/dashboard" render={() => <DashboardPage />} />

              <Route path="/:authType" component={AuthPage} />

              <Route component={NotFoundPage} />
            </Switch>
          </>
        </Router>
      </ProvideAuth>
    </>
  );
}
export default App;
