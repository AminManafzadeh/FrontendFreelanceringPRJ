import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaDiagramProject } from "react-icons/fa6";

function SideBar() {
  return (
    <div className="bg-secondary-0 row-start-1 row-span-2 p-4">
      <ul className="flex flex-col gap-y-4">
        <li>
          <NavLink className="navlinkStyle" to="/owner/dashboard">
            <GoHome className="w-5 h-5" />
            <span>دشبورد</span>
          </NavLink>
        </li>

        <li>
          <NavLink className="navlinkStyle" to="/owner/projects">
            <FaDiagramProject className="w-5 h-5" />
            <span>پروژه ها</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
