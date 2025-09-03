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
      <td className="text-xs sm:text-sm">
        {englishToPersianNumber(index + 1)}
      </td>
      <td className="text-xs sm:text-sm">
        {truncateText(proposal.description, 30)}
      </td>
      <td className="text-xs sm:text-sm">
        <p>{englishToPersianNumber(proposal.duration)} روز</p>
      </td>
      <td className="text-xs sm:text-sm">
        {englishToPersianNumber(proposal.price)} تومان
      </td>
      <td className="text-xs sm:text-sm">
        <span className={`badge ${statusContainer[status].className}`}>
          {statusContainer[status].label}
        </span>
      </td>
      <td>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--secondary text-secondary-0 text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-2"
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
