import { HiPlusSmall } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between mt-4 mb-6">
      <h1 className="font-bold text-secondary-700">پروژه های شما</h1>

      <button
        onClick={() => setOpen(true)}
        className="btn btn--primary flex items-center gap-x-2"
      >
        <HiPlusSmall />
        <span>اضافه کردن پروژه</span>
      </button>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title="اضافه کردن پروژه جدید"
      >
        <CreateProjectForm onClose={() => setOpen(false)} />
      </Modal>
    </div>
  );
}

export default ProjectHeader;
