import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useAllUsers from "../useAllUsers";
import UserRow from "./UserRow";

function UserTable() {
  const { users, isLoading } = useAllUsers();

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>نام کاربر</th>
        <th>ایمیل</th>
        <th>شماره موبایل</th>
        <th>نقش</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {users?.map((user, index) => {
          return <UserRow key={user._id} index={index} user={user} />;
        })}
      </Table.Body>
    </Table>
  );
}

export default UserTable;
