import { useState } from "react";
import Table from "../../../ui/Table";
import englishToPersianNumber from "../../../utils/englishToPersianNumber";
import toLocalDateShot from "../../../utils/toLocalDateShot";
import truncateText from "../../../utils/truncateText";
import { MdAssignmentAdd } from "react-icons/md";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

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

function ProjectRow({ project, index }) {
  const { status } = project;
  const [open, setOpen] = useState(false);

  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(project.title, 10)}</td>
      <td>{englishToPersianNumber(project.budget)} تومان</td>
      <td>{toLocalDateShot(project.deadline)}</td>
      <td>
        <span className={`badge ${projectStatus[status].className}`}>
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button onClick={() => setOpen(true)}>
          <MdAssignmentAdd className="w-5 h-5 text-primary-900" />
        </button>

        <Modal
          onClose={() => setOpen(false)}
          open={open}
          title={`درخواست انجام پروژه ${project?.title}`}
        >
          <CreateProposal
            onClose={() => setOpen(false)}
            projectId={project._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
