import ProposalsTable from "../features/proposals/ProposalsTable";

function FreelancerProposals() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="px-1 sm:px-0">
        <h1 className="font-black text-secondary-700 text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 lg:mb-8">
          لیست درخواست ها
        </h1>
      </div>
      <div className="overflow-hidden">
        <ProposalsTable />
      </div>
    </div>
  );
}

export default FreelancerProposals;
