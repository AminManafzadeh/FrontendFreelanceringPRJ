import { HiPlusSmall } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

function ProjectHeader() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4 sm:space-y-0">
      {/* Mobile Layout */}
      <div className="sm:hidden">
        <h1 className="font-bold text-lg text-secondary-700 mb-4">
          پروژه های شما
        </h1>
        <button
          onClick={() => setOpen(true)}
          className="btn btn--primary flex items-center justify-center gap-x-2 w-full text-sm"
        >
          <HiPlusSmall className="w-4 h-4" />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex sm:items-center sm:justify-between mt-4 mb-6">
        <h1 className="font-bold text-xl text-secondary-700">پروژه های شما</h1>

        <button
          onClick={() => setOpen(true)}
          className="btn btn--primary flex items-center gap-x-2"
        >
          <HiPlusSmall />
          <span>اضافه کردن پروژه</span>
        </button>
      </div>

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
