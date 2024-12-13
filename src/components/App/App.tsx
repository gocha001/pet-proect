import { Routes, Route } from "react-router-dom";
import Layout from "../Layout.tsx";
import HomePage from "../../pages/HomePage/HomePage.tsx";
import { useSelector } from "react-redux";
import { useEffect, FC } from "react";
import { refresh } from "../../redux/auth/operations.ts";
import { selectIsRefreshing } from "../../redux/auth/selectors.ts";
import Loader from "../Loader/Loader.tsx";
import { PrivateRoute } from "../PrivateRoute.tsx";
import { RestrictedRoute } from "../RestrictedRoute.tsx";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { useAppDispatch } from "../../redux/store.ts";

const NotFound = lazy(() => import("../../pages/NotFound/NotFound.tsx"));
const RegistrationPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage.tsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.tsx"));
const ContactsPage = lazy(() =>
  import("../../pages/ContactsPage/ContactsPage.tsx")
);

const App: FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="registed"
            element={
              <RestrictedRoute
                component={<RegistrationPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
