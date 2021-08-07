import React from "react";
import { Redirect, Route } from "react-router-dom";
import { getCurrentUser } from "./services/authServices";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const user = getCurrentUser();

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user.isAdmin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
