import { NavLink } from "react-router-dom";
import AppLayout from "../../ui/AppLayout";
import SideBar from "../../ui/SideBar";
import { GoHome } from "react-icons/go";
import { FaDiagramProject } from "react-icons/fa6";
import { PiGitPullRequest } from "react-icons/pi";

function FreelancerLayout() {
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

        <li>
          <NavLink className="navlinkStyle" to="/freelancer/proposals">
            <PiGitPullRequest className="w-5 h-5 lg:w-5 lg:h-5" />
            <span>درخواست ها</span>
          </NavLink>
        </li>
      </SideBar>
    </AppLayout>
  );
}

export default FreelancerLayout;
