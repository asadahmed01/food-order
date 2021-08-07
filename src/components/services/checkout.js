import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/checkout";
export function checkout(token, product, id) {
  return httpService.post(apiEndpoint, {
    token,
    product,
    id,
  });
}
