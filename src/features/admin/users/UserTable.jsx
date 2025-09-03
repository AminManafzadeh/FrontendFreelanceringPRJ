import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useAllUsers from "../useAllUsers";
import UserRow from "./UserRow";
import englishToPersianNumber from "../../../utils/englishToPersianNumber";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import ChangeUserStatus from "./ChangeUserStatus";

const statusUser = [
  { className: "badge--danger", label: "رد شده" },
  { className: "badge--secondary", label: "در انتظار تایید" },
  { className: "badge--success", label: "تایید شده" },
];

function UserTable() {
  const { users, isLoading } = useAllUsers();

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <>
      {/* Mobile View */}
      <div className="block lg:hidden space-y-4">
        {users?.map((user, index) => (
          <UserMobileCard key={user._id} user={user} index={index} />
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:block">
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
      </div>
    </>
  );
}

function UserMobileCard({ user, index }) {
  const { status } = user;
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-secondary-0 rounded-lg border border-secondary-200 p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3 space-x-reverse">
          <div className="bg-primary-100 text-primary-700 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
            {index + 1}
          </div>
          <h3 className="font-bold text-secondary-700 text-lg">{user?.name}</h3>
        </div>
        <span className={`badge ${statusUser[status].className}`}>
          {statusUser[status].label}
        </span>
      </div>

      {/* User Details */}
      <div className="space-y-4 mb-6">
        <div className="border-b border-secondary-200 pb-3">
          <p className="text-secondary-500 text-sm mb-1">ایمیل</p>
          <p className="text-secondary-600 font-medium">{user?.email}</p>
        </div>

        <div className="border-b border-secondary-200 pb-3">
          <p className="text-secondary-500 text-sm mb-1">شماره موبایل</p>
          <p className="text-secondary-600 font-medium direction-ltr text-right">
            {englishToPersianNumber(user?.phoneNumber)}
          </p>
        </div>

        <div className="border-b border-secondary-200 pb-3">
          <p className="text-secondary-500 text-sm mb-1">نقش کاربری</p>
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="bg-secondary-100 text-secondary-600 px-3 py-1 rounded-full text-sm font-medium">
              {user?.role}
            </div>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="flex justify-center">
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--secondary w-full py-3 font-medium"
        >
          تغییر وضعیت کاربر
        </button>
      </div>
    </div>
  );
}

export default UserTable;
