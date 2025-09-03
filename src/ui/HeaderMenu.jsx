import { HiOutlineUser } from "react-icons/hi";
import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/authentication/Logout";

function HeaderMenu() {
  return (
    <div>
      <ul className="flex gap-x-2 sm:gap-x-4 items-center">
        <li className="flex">
          <Link to="dashboard" className="p-1">
            <HiOutlineUser className="w-4 h-4 sm:w-5 sm:h-5 text-primary-900" />
          </Link>
        </li>
        <li className="flex">
          <DarkModeToggle />
        </li>
        <li className="flex">
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default HeaderMenu;
