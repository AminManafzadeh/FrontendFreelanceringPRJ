import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <div>
      {/* Mobile Cards View */}
      <div className="block lg:hidden space-y-3">
        {proposals?.map((proposal, index) => (
          <div
            key={proposal._id}
            className="bg-secondary-0 rounded-lg p-4 shadow-sm border border-secondary-200"
          >
            <div className="flex justify-between items-start mb-3">
              <span className="text-xs text-secondary-500">#{index + 1}</span>
              <div className="text-right">
                {/* Status badge will be handled in ProposalRow */}
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <span className="text-xs text-secondary-500 block">
                  توضیحات:
                </span>
                <p className="text-sm text-secondary-700 line-clamp-2">
                  {proposal.description}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <span className="text-xs text-secondary-500 block">
                    زمان تحویل:
                  </span>
                  <span className="text-secondary-700">
                    {proposal.duration} روز
                  </span>
                </div>
                <div>
                  <span className="text-xs text-secondary-500 block">
                    هزینه:
                  </span>
                  <span className="text-secondary-700">
                    {proposal.price?.toLocaleString("fa-IR")} تومان
                  </span>
                </div>
              </div>
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
          </Table.Header>

          <Table.Body>
            {proposals?.map((proposal, index) => {
              return (
                <ProposalRow
                  key={proposal._id}
                  index={index}
                  proposal={proposal}
                />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ProposalsTable;
