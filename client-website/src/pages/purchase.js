import React, { useEffect, useState } from "react";
import PageLoader from "./../components/PageLoader";
import FormAlert from "./../components/FormAlert";
import { useAuth, requireAuth } from "./../util/auth.js";
import { useRouter } from "./../util/router.js";
import { redirectToCheckout } from "./../util/stripe.js";

function PurchasePage(props) {
  const router = useRouter();
  const auth = useAuth();
  const [formAlert, setFormAlert] = useState();

  useEffect(() => {
    if (auth.user.planIsActive) {
      // If user already has an active plan
      // then take them to Stripe billing
      router.push("/settings/billing");
    } else {
      // Otherwise go to checkout
      redirectToCheckout(router.query.plan).catch((error) => {
        setFormAlert({
          type: "error",
          message: error.message,
        });
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageLoader>
      {formAlert && (
        <FormAlert
          type={formAlert.type}
          message={formAlert.message}
          style={{ maxWidth: "500px" }}
        />
      )}
    </PageLoader>
  );
}

export default requireAuth(PurchasePage);
