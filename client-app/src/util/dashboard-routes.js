import { lazy } from "react";

// sidebar Icons
import dashboardActiveIcon from "../assets/icons/dashboard-active.png";
import dashboardIcon from "../assets/icons/dashboard.png";
import storeactiveIcon from "../assets/icons/store-active.png";
import storeIcon from "../assets/icons/store.png";
import productActiveIcon from "../assets/icons/product-active.png";
import ProductIcon from "../assets/icons/product.png";
import ordersActiveIcon from "../assets/icons/orders-active.png";
import OrdersIcon from "../assets/icons/orders.png";
import userActiveIcon from "../assets/icons/user-active.png";
import userIcon from "../assets/icons/user.png";
import supportActiveIcon from "../assets/icons/support-active.png";
import supportIcon from "../assets/icons/support.png";
import deliverActiveIcon from "../assets/icons/delivery-active.png";
import deliveryIcon from "../assets/icons/delivery.png";

const Overview = lazy(() => import("../dashboard-pages/Overview"));
const Stores = lazy(() => import("../dashboard-pages/Stores"));
const Products = lazy(() => import("../dashboard-pages/Products"));
const Account = lazy(() => import("../dashboard-pages/Account"));
const SingleStore = lazy(() => import("../dashboard-pages/SingleStore"));
const Orders = lazy(() => import("../dashboard-pages/Orders"));
const SingleProduct = lazy(() => import("../dashboard-pages/SingleProduct"));
const Support = lazy(() => import("../dashboard-pages/Support"));
const Delivery = lazy(() => import("../dashboard-pages/Delivery"));

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
      path: "/stores/:id",
      name: "Stores",
      slug: "/:storeId",
      component: SingleStore,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? storeactiveIcon : storeIcon,
    },
    {
      path: "/stores",
      name: "Stores",
      component: Stores,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? storeactiveIcon : storeIcon,
    },
    {
      path: "/products/:productId",
      slug: "/:productId",
      name: "Product",
      component: SingleProduct,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? productActiveIcon : ProductIcon,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? productActiveIcon : ProductIcon,
    },
    // Modal for order details instead of a page jare ahbeg * 3
    {
      path: "/orders",
      name: "Orders",
      component: Orders,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? ordersActiveIcon : OrdersIcon,
    },
    {
      path: "/account",
      name: "Account",
      component: Account,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? userActiveIcon : userIcon,
    },
    {
      path: "/support",
      name: "Support",
      component: Support,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? supportActiveIcon : supportIcon,
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
      path: "/deliveries",
      name: "Deliveries",
      component: Delivery,
      getLinkIcon: (selected) =>
        selected === "sidebar-active" ? deliverActiveIcon : deliveryIcon,
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
