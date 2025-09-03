import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { NavLink } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaDiagramProject } from "react-icons/fa6";
import { PiGitPullRequest } from "react-icons/pi";
import { CiUser } from "react-icons/ci";

function AdminLayout() {
  return (
    <div>
      <AppLayout>
        <SideBar>
          <li>
            <NavLink className="navlinkStyle" to="/admin/dashboard">
              <GoHome className="w-5 h-5 lg:w-5 lg:h-5" />
              <span>دشبورد</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="navlinkStyle" to="/admin/users">
              <CiUser className="w-5 h-5 lg:w-5 lg:h-5" />
              <span>کاربران</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="navlinkStyle" to="/admin/projects">
              <FaDiagramProject className="w-5 h-5 lg:w-5 lg:h-5" />
              <span>پروژه ها</span>
            </NavLink>
          </li>

          <li>
            <NavLink className="navlinkStyle" to="/admin/proposals">
              <PiGitPullRequest className="w-5 h-5 lg:w-5 lg:h-5" />
              <span>درخواست ها</span>
            </NavLink>
          </li>
        </SideBar>
      </AppLayout>
    </div>
  );
}

export default AdminLayout;
