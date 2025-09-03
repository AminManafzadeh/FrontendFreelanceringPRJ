import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function SingleProjectHeader({ project }) {
  console.log(project);
  const moveBack = useMoveBack();

  return (
    <div className="space-y-4 sm:space-y-0">
      {/* Mobile Layout */}
      <div className="sm:hidden">
        <button
          onClick={moveBack}
          className="flex items-center gap-x-2 text-secondary-500 hover:text-secondary-700 transition-colors mb-3"
        >
          <HiArrowRight className="w-5 h-5" />
          <span className="text-sm">بازگشت</span>
        </button>
        <h1 className="font-black text-secondary-700 text-lg leading-relaxed">
          لیست درخواست های {project.title}
        </h1>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex sm:items-center gap-x-4 mb-8">
        <button
          onClick={moveBack}
          className="hover:bg-secondary-100 p-2 rounded-lg transition-colors"
        >
          <HiArrowRight className="w-5 h-5 text-secondary-500" />
        </button>
        <h1 className="font-black text-secondary-700 text-xl lg:text-2xl">
          لیست درخواست های {project.title}
        </h1>
      </div>
    </div>
  );
}

export default SingleProjectHeader;
