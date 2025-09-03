import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";

function Logout() {
  const { isPending, logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div>
      {isPending ? (
        <Loading width="1rem" height="1rem" />
      ) : (
        <button onClick={handleLogout} className="p-1">
          <HiArrowRightOnRectangle className="w-4 h-4 sm:w-5 sm:h-5 text-secondary-500 hover:text-red-600" />
        </button>
      )}
    </div>
  );
}

export default Logout;
