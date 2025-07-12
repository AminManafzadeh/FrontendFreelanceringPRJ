import { useState } from "react";
import Table from "../../ui/Table";
import englishToPersianNumber from "../../utils/englishToPersianNumber";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const statusContainer = [
  {
    className: "badge--danger",
    label: "رد شده",
  },
  {
    className: "badge--secondary",
    label: "در انتظار تایید ",
  },
  {
    className: "badge--success",
    label: "تایید شده",
  },
];

function ProposalRow({ proposal, index }) {
  const { status } = proposal;
  const [open, setOpen] = useState();

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(proposal.description, 30)}</td>
      <td>
        <p>{proposal.duration} روز</p>
      </td>
      <td>{englishToPersianNumber(proposal.price)} تومان</td>
      <td>
        <span className={`badge ${statusContainer[status].className}`}>
          {statusContainer[status].label}
        </span>
      </td>
      <td>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--secondary text-secondary-0"
        >
          تغییر وضعیت
        </button>
        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={proposal._id}
            onClose={() => setOpen(false)}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
