import { useState } from "react";
import Modal from "../../../ui/Modal";
import Table from "../../../ui/Table";
import englishToPersianNumber from "../../../utils/englishToPersianNumber";
import truncateText from "../../../utils/truncateText";
import ChangeUserStatus from "./ChangeUserStatus";

const statusUser = [
  { className: "badge--danger", label: "رد شده" },
  { className: "badge--secondary", label: "در انتظار تایید" },
  { className: "badge--success", label: "تایید شده" },
];

function UserRow({ user, index }) {
  const { status } = user;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(user?.name, 10)}</td>
      <td>{user?.email}</td>
      <td>{englishToPersianNumber(user?.phoneNumber)}</td>
      <td>{user?.role}</td>
      <td>
        <span className={`badge ${statusUser[status].className}`}>
          {statusUser[status].label}
        </span>
      </td>
      <td>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت کاربر"
        >
          <ChangeUserStatus userId={user._id} onClose={() => setOpen(false)} />
        </Modal>
        <button onClick={() => setOpen(true)} className="btn btn--secondary">
          تغییر وضعیت
        </button>
      </td>
    </Table.Row>
  );
}

export default UserRow;
