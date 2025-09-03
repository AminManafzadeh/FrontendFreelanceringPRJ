import useUser from "./useUser";

function UserAvatar() {
  const { user } = useUser();

  return (
    <div className="flex items-center gap-x-1 sm:gap-x-2 text-secondary-600">
      <img
        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover object-center flex-shrink-0"
        src="/user.jpg"
        alt="user-account"
      />
      <span className="text-xs sm:text-sm truncate max-w-20 sm:max-w-none">
        {user?.name}
      </span>
    </div>
  );
}

export default UserAvatar;
