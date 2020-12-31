import React from "react";
import { Switch, Route, Router } from "./../../util/router";
import NotFoundPage from "../not-found";
import AuthPage from "../auth";
import { ProvideAuth } from "./../../util/auth";

function App() {
  return (
    <>
      <ProvideAuth>
        <Router>
          <>
            <Switch>
              <Route path="/:authType" component={AuthPage} />

              {/* <Route
                path="/dashboard"
                render={() => <Dashboard mediaQuery={mediaQuery} />}
              /> */}

              <Route component={NotFoundPage} />
            </Switch>
          </>
        </Router>
      </ProvideAuth>
    </>
  );
}
export default App;
