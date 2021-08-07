import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/update";

export function updateAddress(data, currentUser) {
  return httpService.put(apiEndpoint, {
    address: data,
    user: currentUser,
  });
}
