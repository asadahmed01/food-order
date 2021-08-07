import httpService from "./httpService";

const apiEndpoint = "https://e-foo.herokuapp.com/register";
export function register(user) {
  return httpService.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    name: user.name,
  });
}
