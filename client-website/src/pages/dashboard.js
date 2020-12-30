import React from "react";
import DashboardSection from "./../components/DashboardSection";
import { requireAuth } from "./../util/auth.js";

function DashboardPage(props) {
  return (
    <DashboardSection
      bg="white"
      textColor="dark"
      size="md"
      title="Dashboard"
      subtitle=""
    />
  );
}

export default requireAuth(DashboardPage);
