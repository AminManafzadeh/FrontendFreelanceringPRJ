import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";

function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading width="4rem" height="4rem" />;
  if (!projects?.length) return <Empty resourceName="پروژه ای" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
      </Table.Header>

      <Table.Body>
        {projects?.map((project, index) => {
          return (
            <ProjectRow key={project.id} index={index} project={project} />
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default ProjectsTable;
