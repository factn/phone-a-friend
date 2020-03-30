import React, { PropsWithChildren } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useStateValue } from "../../contexts/AppContext";

/**
 * This component wraps all protected routes
 * It checks if the user is logged in:
 * - User logged in -> Render the route they were going to
 * - User NOT logged in -> Redirect to login page
 */
const ProtectedRoute: React.FC<PropsWithChildren<RouteProps>> = ({
  children,
  ...rest
}) => {
  const { state } = useStateValue();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.user !== "" ? (
          <>{children}</>
        ) : (
          <Redirect
            from=""
            to={{ pathname: "/login", state: { from: location } }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
