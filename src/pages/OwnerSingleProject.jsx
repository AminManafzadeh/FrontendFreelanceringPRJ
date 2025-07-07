import ProposalsTable from "../features/project/ProposalsTable";
import SingleProjectHeader from "../features/project/SingleProjectHeader";
import useSingleProject from "../features/project/useSingleProject";
import Loading from "../ui/Loading";

function OwnerSingleProject() {
  const { isLoading, project } = useSingleProject();
  console.log(project);

  if (isLoading) return <Loading width="4rem" height="4rem" />;

  return (
    <div>
      <SingleProjectHeader project={project} />
      <ProposalsTable proposals={project?.proposals} />
    </div>
  );
}

export default OwnerSingleProject;
