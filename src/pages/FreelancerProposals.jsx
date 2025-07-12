import ProposalsTable from "../features/proposals/ProposalsTable";

function FreelancerProposals() {
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست درخواست ها
      </h1>
      <ProposalsTable />
    </div>
  );
}

export default FreelancerProposals;
