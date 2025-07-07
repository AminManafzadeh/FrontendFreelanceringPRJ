import { useState } from "react";
import Modal from "../../ui/Modal";
import Table from "../../ui/Table";
import englishToPersianNumber from "../../utils/englishToPersianNumber";
import toLocalDateShot from "../../utils/toLocalDateShot";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi2";
import { TbPencil } from "react-icons/tb";
import ConfirmDelete from "../../ui/ConfirmDelete";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeOwnerProjectApi } from "../../services/projectService";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "../../ui/ToggleProjectStatus";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi2";

function ProjectRow({ project, index }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: removeOwnerProjectApi,
  });
  const queryClient = useQueryClient();

  const handleDelet = async (id) => {
    try {
      const data = await mutateAsync(id, {
        onSuccess: () => setIsDeleteOpen(false),
      });
      toast.success(data?.message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Table.Row>
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
        <ToggleProjectStatus project={project} />
      </td>
      <td>
        <div className="flex items-center gap-x-4">
          <>
            <button onClick={() => setIsEditOpen(true)}>
              <TbPencil className="w-5 h-5 text-primary-900" />
            </button>
            <Modal
              open={isEditOpen}
              title={`ویرایش  ${project.title}`}
              onClose={() => setIsEditOpen(false)}
            >
              <CreateProjectForm
                onClose={() => setIsEditOpen(false)}
                projectToEdit={project}
              />
            </Modal>
          </>
          <>
            <button onClick={() => setIsDeleteOpen(true)}>
              <HiOutlineTrash className="w-5 h-5 text-error" />
            </button>
            <Modal
              title={`حذف   ${project.title}`}
              onClose={() => setIsDeleteOpen(false)}
              open={isDeleteOpen}
            >
              <ConfirmDelete
                resourceName={project.title}
                onClose={() => setIsDeleteOpen(false)}
                disabled={isPending}
                onConfirm={() => handleDelet(project._id)}
              />
            </Modal>
          </>
        </div>
      </td>
      <td className=" text-center">
        <Link to={project._id} className="flex justify-center">
          <HiEye className="w-5 h-5 text-primary-800" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default ProjectRow;
