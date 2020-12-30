import React, { useState } from "react";
import FormAlert from "../FormAlert/FormAlert";
import AuthForm from "../AuthForm";

import AuthFooter from "../AuthFooter/index.js";
import { useRouter } from "../../util/router.js";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        inputSize={props.inputSize}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {["signup", "signin"].includes(props.type) && (
        <>
          <AuthFooter type={props.type} typeValues={props.typeValues} />
        </>
      )}
    </>
  );
}

export default Auth;
