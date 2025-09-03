import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import { useState } from "react";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";
import englishToPersianNumber from "../../utils/englishToPersianNumber";

const statusContainer = [
  {
    className: "badge--danger",
    label: "رد شده",
  },
  {
    className: "badge--secondary",
    label: "در انتظار تایید",
  },
  {
    className: "badge--success",
    label: "تایید شده",
  },
];

function ProposalsTable({ proposals }) {
  console.log(proposals);
  const [selectedProposal, setSelectedProposal] = useState(null);

  if (!proposals.length) return <Empty resourceName="درخواستی" />;

  return (
    <div>
      {/* Mobile Cards View */}
      <div className="block lg:hidden space-y-4">
        {proposals?.map((proposal, index) => (
          <div
            key={proposal.id}
            className="bg-secondary-0 rounded-xl p-4 shadow-sm border border-secondary-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-secondary-500 bg-secondary-50 px-2 py-1 rounded">
                #{englishToPersianNumber(index + 1)}
              </span>
              <span
                className={`badge ${
                  statusContainer[proposal.status].className
                } text-xs`}
              >
                {statusContainer[proposal.status].label}
              </span>
            </div>

            {/* Freelancer Info */}
            <div className="mb-4">
              <h3 className="font-bold text-secondary-900 text-base mb-1">
                {proposal.user?.name || "نام فریلنسر"}
              </h3>
              <p className="text-sm text-secondary-600 line-clamp-3 leading-relaxed">
                {proposal.description}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                <span className="text-sm font-medium text-secondary-700">
                  هزینه:
                </span>
                <span className="text-sm font-bold text-primary-900">
                  {englishToPersianNumber(proposal.price)} تومان
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                <span className="text-sm font-medium text-secondary-700">
                  زمان تحویل:
                </span>
                <span className="text-sm font-bold text-secondary-900">
                  {englishToPersianNumber(proposal.duration)} روز
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-3 border-t border-secondary-100">
              <button
                onClick={() => setSelectedProposal(proposal)}
                className="w-full bg-secondary-600 text-white py-2.5 rounded-lg hover:bg-secondary-700 transition-colors text-sm font-medium"
              >
                تغییر وضعیت
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Table>
          <Table.Header>
            <th className="text-xs sm:text-sm">#</th>
            <th className="text-xs sm:text-sm">توضیحات</th>
            <th className="text-xs sm:text-sm">زمان تحویل</th>
            <th className="text-xs sm:text-sm">هزینه</th>
            <th className="text-xs sm:text-sm">وضعیت</th>
            <th className="text-xs sm:text-sm">عملیات</th>
          </Table.Header>

          <Table.Body>
            {proposals?.map((proposal, index) => {
              return (
                <ProposalRow
                  key={proposal.id}
                  index={index}
                  proposal={proposal}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>

      {/* Mobile Modal */}
      {selectedProposal && (
        <Modal
          onClose={() => setSelectedProposal(null)}
          open={!!selectedProposal}
          title="تغییر وضعیت درخواست"
        >
          <ChangeProposalStatus
            proposalId={selectedProposal._id}
            onClose={() => setSelectedProposal(null)}
          />
        </Modal>
      )}
    </div>
  );
}

export default ProposalsTable;
