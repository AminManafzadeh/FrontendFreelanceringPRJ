import ProposalsTable from "../features/project/ProposalsTable";
import SingleProjectHeader from "../features/project/SingleProjectHeader";
import useSingleProject from "../features/project/useSingleProject";
import Loading from "../ui/Loading";

function OwnerSingleProject() {
  const { isLoading, project } = useSingleProject();
  console.log(project);

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <SingleProjectHeader project={project} />
      <div className="overflow-hidden">
        <ProposalsTable proposals={project?.proposals} />
      </div>
    </div>
  );
}

export default OwnerSingleProject;
