import React from "react";
import { logout } from "./services/authServices";
function Logout() {
  logout();
  window.location = "/";

  return (
    <div className="min-h-screen text-center mt-40 text-3xl">
      {" "}
      Logging out ...
    </div>
  );
}

export default Logout;
