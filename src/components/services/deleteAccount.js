import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/delete";

export function deleteAccount(user) {
  return httpService.delete(apiEndpoint, {
    user: user,
  });
}
