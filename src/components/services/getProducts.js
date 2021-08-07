import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/api/products";

export function getAllProducts() {
  return httpService.get(apiEndpoint);
}
