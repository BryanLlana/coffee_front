import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Summary from "./components/Summary";

const HomeLayout = () => {
  return (
    <div className="md:flex">
      <Sidebar />
      <div className="flex-1 px-3 h-screen overflow-y-scroll">
        <Outlet />
      </div>
      <Summary />
    </div>
  );
};

export default HomeLayout;
