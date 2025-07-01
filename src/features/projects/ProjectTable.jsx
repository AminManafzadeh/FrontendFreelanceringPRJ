import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import englishToPersianNumber from "../../utils/englishToPersianNumber";
import toLocalDateShot from "../../utils/toLocalDateShot";
import truncateText from "../../utils/truncateText";
import useOwnerProjects from "./useOwnerProjects";

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading width="4rem" height="4rem" />;
  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>
        <thead>
          <tr className="title-row">
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>فریلنسر</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>

        <tbody>
          {projects?.map((project, index) => {
            return (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{truncateText(project.title, 10)}</td>
                <td>{project.category.title}</td>
                <td>{englishToPersianNumber(project.budget)} تومان</td>
                <td>{toLocalDateShot(project.deadline)}</td>
                <td>
                  <div className="flex flex-wrap items-center max-w-[100px] gap-2">
                    {project.tags.map((tag) => (
                      <span className="badge badge--secondary" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td>{project.freelancer?.name || "-"}</td>
                <td>
                  {project.status === "OPEN" ? (
                    <span className="badge badge--success">باز</span>
                  ) : (
                    <span className="badge badge--danger">بسته</span>
                  )}
                </td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProjectTable;
