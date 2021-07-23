import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/addOrders";

export function updateOrders(data, user) {
  return httpService.put(apiEndpoint, {
    orders: data,
    user: user,
  });
}
