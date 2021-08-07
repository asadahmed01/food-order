import jwtDecode from "jwt-decode";
import httpService, { setJwt } from "./httpService";
//import config from "../config.json";

const apiEndpoint = "https://e-foo.herokuapp.com/login";

setJwt(getJwt());
export async function login(email, password) {
  const { data: jwt } = await httpService.post(apiEndpoint, {
    email,
    password,
  });
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
  localStorage.clear();
}

export function getCurrentUser() {
  try {
    const token = localStorage.getItem("token");
    return jwtDecode(token);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  return localStorage.getItem("token");
}
