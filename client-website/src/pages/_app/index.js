import React from "react";
import "../../styles/global.scss";
import NavbarCustom from "../../components/NavbarCustom";
import IndexPage from "../home";
import AuthPage from "../auth/index";
import { Switch, Route, Router } from "../../util/router.js";
import NotFoundPage from "../not-found/index.js";
import Footer from "../../components/Footer";
import "../../util/analytics.js";
import { ProvideAuth } from "../../util/auth.js";
import logoBlue from "../../assets/img/logo-blue.png";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo={logoBlue}
          />
          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="light"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            copyright={`© ${new Date().getFullYear()} Jumga`}
            logo={logoBlue}
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
