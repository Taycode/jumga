import { lazy } from "react";

// sidebar Icons
import dashboardActiveIcon from "../assets/icons/dashboard-active.png";
import dashboardIcon from "../assets/icons/dashboard.png";

const Overview = lazy(() => import("../dashboard-pages/Overview"));

export default {
  SELLER: [
    {
      path: "/overview",
      name: "Dashboard",
      component: Overview,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? dashboardActiveIcon : dashboardIcon,
    },
    {
      path: "/stores",
      name: "Stores",
      component: Overview,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? dashboardActiveIcon : dashboardIcon,
    },
  ],
  RIDER: [],
};
