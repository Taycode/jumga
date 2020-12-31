import React from "react";
import { Card, Container } from "react-bootstrap";
import NavigationBar from "../NavigationBar";
import { AUTH_TYPES } from "../../util/constants";
import AuthForm from "../AuthForm";
import AuthFooter from "../AuthFooter";
import "./styles.scss";

import logoBlue from "../../assets/img/logo-white.png";

const AuthSection = ({ authType, role }) => {
  return (
    <section className="auth-section">
      <NavigationBar bg="primary" variant="dark" expand="md" logo={logoBlue} />
      <Container>
        <Card className=" shadow auth-section__card">
          <h3> {AUTH_TYPES[authType]?.title} </h3>
          <div>
            <AuthForm
              role={role}
              authType={authType}
              authFormData={AUTH_TYPES[authType]}
            />
            <AuthFooter role={role} authType={authType} />
          </div>
        </Card>
      </Container>
    </section>
  );
};

export default AuthSection;
