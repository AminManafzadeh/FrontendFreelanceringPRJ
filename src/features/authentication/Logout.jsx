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
        <Loading width="40rem" height="40rem" />
      ) : (
        <button onClick={handleLogout}>
          <HiArrowRightOnRectangle className="w-5 h-5 text-secondary-500 hover:text-red-600 mt-2" />
        </button>
      )}
    </div>
  );
}

export default Logout;
