import React from "react";

import PersonalProfile from "../../ProfileForms/PersonalProfile";
import Paymentdata from "../../ProfileForms/PaymentForm";
import PrivacyData from "../../ProfileForms/PrivacyForm";

const PERSONAL = "PERSONAL";
const PRIVACY = "PRIVACY";
const PAYMENTS = "PAYMENTS";

export const PROFILE_SECTIONS = [
  {
    name: "Personal Data",
    id: 1,
    description: "Modify your profile",
    slug: PERSONAL,
  },
  {
    name: "Payments",
    description: "Uprate your payment details",
    id: 2,
    slug: PAYMENTS,
  },
  {
    name: "Privacy Details",
    description: "Change your password",
    id: 3,
    slug: PRIVACY,
  },
];

export const renderProfileComponent = (active, user) => {
  switch (active) {
    case PERSONAL:
      return <PersonalProfile user={user} />;
    case PAYMENTS:
      return <Paymentdata user={user} />;
    case PRIVACY:
      return <PrivacyData user={user} />;

    default:
      return <> NOT FOUND </>;
      break;
  }
};
