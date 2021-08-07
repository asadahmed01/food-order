import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/delete";

export function deleteAccount(user) {
  return httpService.delete(apiEndpoint, {
    user: user,
  });
}
