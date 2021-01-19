export const statHeadings = {
  SELLER: ["Stores", "Products", "Sales", "Balance", "Earnings"],
  RIDER: ["Pending", "Delivered", "Total Deliveries", "Balance", "Earnings"],
};

export const formatStatsArray = (user) => {
  const {
    stores_count,
    product_count,
    sales,
    balance,
    earnings,
    role,
    delivered,
    pending_deliveries,
    total_deliveries,
  } = user;

  const seller_stats = [stores_count, product_count, sales, balance, earnings];

  const rider_stats = [
    pending_deliveries,
    delivered,
    total_deliveries,
    balance,
    earnings,
  ];

  if (role === "seller") {
    return seller_stats;
  }
  return rider_stats;
};
