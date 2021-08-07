import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/user";
export function getUserInfo(id) {
  return httpService.post(apiEndpoint, {
    id,
  });
}
