import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectRow from "./ProjectRow";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";
import englishToPersianNumber from "../../../utils/englishToPersianNumber";
import toLocalDateShot from "../../../utils/toLocalDateShot";

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

function ProjectsTable() {
  const { isLoading, projects } = useProjects();
  const [selectedProject, setSelectedProject] = useState(null);

  if (isLoading) return <Loading width="4rem" height="4rem" />;
  if (!projects?.length) return <Empty resourceName="پروژه ای" />;

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

            {/* Title & Description */}
            <div className="mb-4">
              <h3 className="font-bold text-secondary-900 text-base mb-2 leading-relaxed">
                {project.title}
              </h3>
              <p className="text-sm text-secondary-600 line-clamp-3 leading-relaxed">
                {project.description}
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
            </div>

            {/* Action Button */}
            {project.status === "OPEN" && (
              <div className="pt-3 border-t border-secondary-100">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full flex items-center justify-center gap-2 bg-primary-900 text-white py-3 rounded-lg hover:bg-primary-800 transition-colors font-medium"
                >
                  <MdAssignmentAdd className="w-5 h-5" />
                  ارسال درخواست
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Desktop Table View */}
      <div className="hidden lg:block">
        <Table>
          <Table.Header>
            <th className="text-xs sm:text-sm">#</th>
            <th className="text-xs sm:text-sm">عنوان پروژه</th>
            <th className="text-xs sm:text-sm">بودجه</th>
            <th className="text-xs sm:text-sm">ددلاین</th>
            <th className="text-xs sm:text-sm">وضعیت</th>
            <th className="text-xs sm:text-sm">عملیات</th>
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

      {/* Mobile Modal */}
      {selectedProject && (
        <Modal
          onClose={() => setSelectedProject(null)}
          open={!!selectedProject}
          title={`درخواست انجام پروژه ${selectedProject?.title}`}
        >
          <CreateProposal
            onClose={() => setSelectedProject(null)}
            projectId={selectedProject._id}
          />
        </Modal>
      )}
    </div>
  );
}

export default ProjectsTable;
