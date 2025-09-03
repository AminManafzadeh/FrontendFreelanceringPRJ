import { GoHome } from "react-icons/go";
import { FaDiagramProject } from "react-icons/fa6";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { NavLink } from "react-router-dom";

function OwnerLayout() {
  return (
    <AppLayout>
      <SideBar>
        <li>
          <NavLink className="navlinkStyle" to="dashboard">
            <GoHome className="w-5 h-5 lg:w-5 lg:h-5" />
            <span>دشبورد</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="navlinkStyle" to="projects">
            <FaDiagramProject className="w-5 h-5 lg:w-5 lg:h-5" />
            <span>پروژه ها</span>
          </NavLink>
        </li>
      </SideBar>
    </AppLayout>
  );
}

export default OwnerLayout;
