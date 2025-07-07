import { HiOutlineSun } from "react-icons/hi2";
import useDarkMode from "../context/useDarkMode";
import { HiOutlineMoon } from "react-icons/hi";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  console.log(isDarkMode);

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? (
          <HiOutlineSun className="w-5 h-5 text-primary-700 mt-2" />
        ) : (
          <HiOutlineMoon className="w-5 h-5 text-primary-700 mt-2" />
        )}
      </button>
    </div>
  );
}

export default DarkModeToggle;
