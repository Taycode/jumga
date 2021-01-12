export const statHeadings = {
  SELLER: ["Stores", "Products", "Sales", "Balance", "Earnings"],
  RIDER: ["Pending", "Delivered", "Total Deliveries", "Balance", "Earnings"],
};

export const formatStatsArray = (user) => {
  const { stores_count, product_count, sales, balance, earnings } = user;

  return [stores_count, product_count, sales, balance, earnings];
};
