import { lazy } from "react";

// sidebar Icons
import dashboardActiveIcon from "../assets/icons/dashboard-active.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import storeactiveIcon from "../assets/icons/store-active.png";
import storeIcon from "../assets/icons/store.png";
import productActiveIcon from "../assets/icons/product-active.png";
import ProductIcon from "../assets/icons/product.png";
import userActiveIcon from "../assets/icons/user-active.png";
import userIcon from "../assets/icons/user.png";

const Overview = lazy(() => import("../dashboard-pages/Overview"));
const Stores = lazy(() => import("../dashboard-pages/Stores"));
const Products = lazy(() => import("../dashboard-pages/Products"));
const Account = lazy(() => import("../dashboard-pages/Account"));

const routes = {
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
      component: Stores,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? storeactiveIcon : storeIcon,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? productActiveIcon : ProductIcon,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? userActiveIcon : userIcon,
    },
  ],
  RIDER: [
    {
      path: "/overview",
      name: "Dashboard",
      component: Overview,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? dashboardActiveIcon : dashboardIcon,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? userActiveIcon : userIcon,
    },
  ],
};

export default routes;
