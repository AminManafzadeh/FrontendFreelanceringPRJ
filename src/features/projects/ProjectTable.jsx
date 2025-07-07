import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading width="4rem" height="4rem" />;
  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
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

export default ProjectTable;
