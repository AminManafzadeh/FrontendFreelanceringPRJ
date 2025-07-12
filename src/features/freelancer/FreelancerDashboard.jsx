import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import FreelancerDashboardHeader from "./FreelancerDashboardHeader";
import Stats from "./Stats";

function FreelancerDashboard() {
  const { isLoading, proposals } = useProposals();
  console.log(proposals);

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <div>
      <FreelancerDashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}

export default FreelancerDashboard;
