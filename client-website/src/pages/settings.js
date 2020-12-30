import React from "react";
import SettingsSection from "./../components/SettingsSection";
import { useRouter } from "./../util/router.js";
import { requireAuth } from "./../util/auth.js";

function SettingsPage(props) {
  const router = useRouter();

  return (
    <SettingsSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      section={router.query.section}
      key={router.query.section}
    />
  );
}

export default requireAuth(SettingsPage);
