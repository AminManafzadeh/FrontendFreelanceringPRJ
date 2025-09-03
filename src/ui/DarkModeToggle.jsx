import { HiOutlineSun } from "react-icons/hi2";
import useDarkMode from "../context/useDarkMode";
import { HiOutlineMoon } from "react-icons/hi";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <div>
      <button onClick={toggleDarkMode} className="p-1">
        {isDarkMode ? (
          <HiOutlineSun className="w-4 h-4 sm:w-5 sm:h-5 text-primary-700" />
        ) : (
          <HiOutlineMoon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-700" />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
