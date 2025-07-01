import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function OwnerLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-[15rem_1fr] h-screen">
      <Header />
      <SideBar />

      <div className="bg-secondary-100 p-8 overflow-y-auto">
        <div className="max-w-screen-lg mx-auto flex flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default OwnerLayout;
