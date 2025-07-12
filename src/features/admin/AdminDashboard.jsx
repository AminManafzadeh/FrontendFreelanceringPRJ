import useProjects from "../../hooks/useProjects";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import AdminDashboardHeader from "./AdminDashboardHeader";
import Stats from "./Stats";
import useAllUsers from "./useAllUsers";

function AdminDashboard() {
  const { proposals, isLoading: isLoading1 } = useProposals();
  const { projects, isLoading: isLoading2 } = useProjects();
  const { users, isLoading: isLoading3 } = useAllUsers();

  if (isLoading1 || isLoading2 || isLoading3)
    return <Loading width="4rem" height="4rem" />;

  return (
    <div>
      <AdminDashboardHeader />
      <Stats proposals={proposals} projects={projects} users={users} />
    </div>
  );
}

export default AdminDashboard;
