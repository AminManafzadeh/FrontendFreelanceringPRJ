import ProjectsHeader from "../features/freelancer/projects/ProjectsHeader";
import ProjectsTable from "../features/freelancer/projects/ProjectsTable";

function SubmitedProjectsPage() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <ProjectsHeader />
      <div className="overflow-hidden">
        <ProjectsTable />
      </div>
    </div>
  );
}

export default SubmitedProjectsPage;
