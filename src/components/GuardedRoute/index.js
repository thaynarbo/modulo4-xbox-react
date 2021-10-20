import React from "react";
import { Route, Redirect } from "react-router";

export default function GuardedRoute({ component: Component, ...rest }) {
  const auth = Boolean(localStorage.getItem("JWT"));
  return (
    <Route
      {...rest}
      render={(props) => {
        return auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
}
