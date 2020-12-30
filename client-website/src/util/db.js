import { useQuery, queryCache } from "react-query";
import { apiRequest } from "./util";

/**** USERS ****/

// Fetch user data (hook)
// This is called automatically by auth.js and merged into auth.user
export function useUser(uid) {
  // Unique cache key for this query
  const cacheKey = ["user", { uid }];
  // Query for fetching user
  const query = () => apiRequest(`user-get?uid=${uid}`);
  // Fetch with react-query (only if we have a uid)
  // Docs: https://react-query.tanstack.com/docs/guides/queries
  return useQuery(cacheKey, query, { enabled: !!uid });
}

// Update an existing user
export function updateUser(uid, data) {
  // Send API request
  return apiRequest(`user-update?uid=${uid}`, "PATCH", data).then((user) => {
    const cacheKey = ["user", { uid }];
    // Update user in cache (causing components to re-render with new data)
    queryCache.setQueryData(cacheKey, user);
    // Return the updated user
    return user;
  });
}

// Create a new user
export function createUser(uid, data) {
  return apiRequest("user-create", "POST", { uid, ...data });
}

/**** ITEMS ****/
/* Example query functions (modify to your needs) */

// Fetch all items by owner (hook)
export function useItemsByOwner(owner) {
  // Unique cache key for this query
  const cacheKey = ["items", { owner }];
  // Query for fetching items
  const query = () => apiRequest(`items-get?owner=${owner}`);
  // Fetch data with react-query (only if we have an owner)
  // Docs: https://react-query.tanstack.com/docs/guides/queries
  return useQuery(cacheKey, query, { enabled: !!owner });
}

// Fetch item data
export function useItem(id) {
  // Unique cache key for this query
  const cacheKey = ["item", { id }];
  // Query for fetching item
  const query = () => apiRequest(`item-get?id=${id}`);
  // Fetch data with react-query (only if we have an id)
  // Docs: https://react-query.tanstack.com/docs/guides/queries
  return useQuery(cacheKey, query, { enabled: !!id });
}

// Update an item
export function updateItem(id, data) {
  // Send API request
  return apiRequest(`item-update?id=${id}`, "PATCH", data).then((item) => {
    const cacheKey = ["item", { id: item.id }];
    // Update item in cache
    queryCache.setQueryData(cacheKey, item);
    // Invalidate existing query for items by owner so that it will
    // be refetched next time and include updated item.
    queryCache.invalidateQueries(["items", { owner: item.owner }]);
    return item;
  });
}

// Create a new item
export function createItem(data) {
  return apiRequest("item-create", "POST", data).then((item) => {
    // Invalidate existing query for items by owner so that it will
    // be refetched next time and include new item.
    queryCache.invalidateQueries(["items", { owner: item.owner }]);
    return item;
  });
}
