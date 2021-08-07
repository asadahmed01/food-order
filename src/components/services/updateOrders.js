import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/addOrders";

export function updateOrders(data, user) {
  return httpService.put(apiEndpoint, {
    orders: data,
    user: user,
  });
}
