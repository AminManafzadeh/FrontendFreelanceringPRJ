import ProjectHeader from "../features/projects/ProjectHeader";
import ProjectTable from "../features/projects/ProjectTable";

function OwnerProjects() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <ProjectHeader />
      <div className="overflow-hidden">
        <ProjectTable />
      </div>
    </div>
  );
}

export default OwnerProjects;
