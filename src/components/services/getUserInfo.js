import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/user";
export function getUserInfo(id) {
  return httpService.post(apiEndpoint, {
    id,
  });
}
