import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthLayout from "./common/layouts/AuthLayout";
import LoginPage from "./auth/pages/Login";
import RegisterPage from "./auth/pages/Register";
import HomeLayout from "./common/layouts/HomeLayout";
import HomePage from "./home/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
