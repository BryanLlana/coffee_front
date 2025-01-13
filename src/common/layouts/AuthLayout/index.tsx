import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main className="max-w-4xl m-auto mt-10  flex flex-col md:flex-row items-center">
      <img src="../img/logo.svg" alt="Image logo" className="max-w-xs mb-5" />
      <div className="p-5 w-full">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
