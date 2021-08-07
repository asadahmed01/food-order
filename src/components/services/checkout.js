import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/checkout";
export function checkout(token, product, id) {
  return httpService.post(apiEndpoint, {
    token,
    product,
    id,
  });
}
