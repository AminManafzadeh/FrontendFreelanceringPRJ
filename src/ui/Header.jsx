import UserAvatar from "../features/authentication/UserAvatar";
import useUser from "../features/authentication/useUser";
import HeaderMenu from "./HeaderMenu";
import { HiBars3 } from "react-icons/hi2";

export default function Header({ isMobile, onToggleSidebar }) {
  const { isLoading } = useUser();

  return (
    <div className="bg-secondary-0 py-2 sm:py-3 lg:py-4 px-2 sm:px-4 lg:px-8 border-b border-secondary-200">
      <div
        className={`flex items-center justify-between gap-x-2 sm:gap-x-4 ${
          isLoading ? "blur-sm" : ""
        }`}
      >
        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={onToggleSidebar}
            className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-secondary-100 transition-colors flex-shrink-0"
          >
            <HiBars3 className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-600" />
          </button>
        )}

        {/* Logo/Title for mobile */}
        {isMobile && (
          <div className="lg:hidden font-bold text-sm sm:text-lg text-secondary-900 flex-1 text-center">
            فریلنسر
          </div>
        )}

        {/* User Section */}
        <div className="flex items-center gap-x-2 sm:gap-x-4 lg:gap-x-8 flex-shrink-0">
          <UserAvatar />
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
}
