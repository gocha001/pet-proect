import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { FC } from "react";
import { RouteProps } from "./App/App.types";

export const PrivateRoute: FC<RouteProps> = ({component: Component, redirectTo}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
