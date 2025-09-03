import Loading from "../../ui/Loading";
import useOwnerProjects from "../projects/useOwnerProjects";
import OwnerDashboardHeader from "./OwnerDashboardHeader";
import Stats from "./Stats";

function OwnerDashboard() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <OwnerDashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}

export default OwnerDashboard;
