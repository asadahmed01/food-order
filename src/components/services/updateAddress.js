import httpService from "./httpService";

const apiEndpoint = "http://localhost:5000/update";

export function updateAddress(data, currentUser) {
  return httpService.put(apiEndpoint, {
    address: data,
    user: currentUser,
  });
}
