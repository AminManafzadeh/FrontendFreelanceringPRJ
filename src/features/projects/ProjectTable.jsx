import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";
import englishToPersianNumber from "../../utils/englishToPersianNumber";
import toLocalDateShot from "../../utils/toLocalDateShot";
import ToggleProjectStatus from "../../ui/ToggleProjectStatus";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "badge--success",
  },
  CLOSED: {
    label: "بسته",
    className: "badge--danger",
  },
};

function ProjectTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <Loading width="4rem" height="4rem" />;
  if (!projects?.length) return <Empty resourceName="پروژه" />;

  return (
    <div>
      {/* Mobile Cards View */}
      <div className="block lg:hidden space-y-4">
        {projects?.map((project, index) => (
          <div
            key={project.id}
            className="bg-secondary-0 rounded-xl p-4 shadow-sm border border-secondary-200"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-medium text-secondary-500 bg-secondary-50 px-2 py-1 rounded">
                #{englishToPersianNumber(index + 1)}
              </span>
              <span
                className={`badge ${
                  projectStatus[project.status].className
                } text-xs`}
              >
                {projectStatus[project.status].label}
              </span>
            </div>

            {/* Title & Category */}
            <div className="mb-4">
              <h3 className="font-bold text-secondary-900 text-base mb-1 leading-relaxed">
                {project.title}
              </h3>
              <p className="text-sm text-secondary-600">
                {project.category.title}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 gap-3 mb-4">
              <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                <span className="text-sm font-medium text-secondary-700">
                  بودجه:
                </span>
                <span className="text-sm font-bold text-primary-900">
                  {englishToPersianNumber(project.budget)} تومان
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                <span className="text-sm font-medium text-secondary-700">
                  ددلاین:
                </span>
                <span className="text-sm font-bold text-secondary-900">
                  {toLocalDateShot(project.deadline)}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                <span className="text-sm font-medium text-secondary-700">
                  درخواست ها:
                </span>
                <span className="text-sm font-bold text-orange-600">
                  {englishToPersianNumber(project.proposals?.length || 0)}
                </span>
              </div>
            </div>

            {/* Tags */}
            {project.tags?.length > 0 && (
              <div className="mb-4">
                <span className="text-xs font-medium text-secondary-600 block mb-2">
                  تگ ها:
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="badge badge--secondary text-xs px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs text-secondary-500">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Freelancer */}
            {project.freelancer && (
              <div className="mb-4 p-3 bg-green-50 rounded-lg">
                <span className="text-sm font-medium text-green-700">
                  فریلنسر:
                </span>
                <span className="text-sm font-bold text-green-900 mr-2">
                  {project.freelancer.name}
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="pt-3 border-t border-secondary-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-secondary-700">
                  وضعیت:
                </span>
                <ToggleProjectStatus project={project} />
              </div>
              <Link
                to={`/owner/projects/${project._id}`}
                className="w-full flex items-center justify-center gap-2 bg-secondary-600 text-white py-2.5 rounded-lg hover:bg-secondary-700 transition-colors text-sm font-medium"
              >
                <HiEye className="w-4 h-4" />
                مشاهده جزئیات
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Table>
          <Table.Header>
            <th className="text-xs sm:text-sm">#</th>
            <th className="text-xs sm:text-sm">عنوان پروژه</th>
            <th className="text-xs sm:text-sm">دسته بندی</th>
            <th className="text-xs sm:text-sm">بودجه</th>
            <th className="text-xs sm:text-sm">ددلاین</th>
            <th className="text-xs sm:text-sm">تگ ها</th>
            <th className="text-xs sm:text-sm">فریلنسر</th>
            <th className="text-xs sm:text-sm">وضعیت</th>
            <th className="text-xs sm:text-sm">عملیات</th>
            <th className="text-xs sm:text-sm">درخواست ها</th>
          </Table.Header>

          <Table.Body>
            {projects?.map((project, index) => {
              return (
                <ProjectRow key={project.id} index={index} project={project} />
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

export default ProjectTable;
