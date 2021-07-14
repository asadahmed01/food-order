import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/api/products";

export function getAllProducts() {
  return httpService.get(apiEndpoint);
}
