import UserTable from "../features/admin/users/UserTable";

function Users() {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="font-black text-secondary-700 text-xl sm:text-2xl lg:text-3xl mb-4 sm:mb-6 lg:mb-8">
        کاربران
      </h1>
      <UserTable />
    </div>
  );
}

export default Users;
