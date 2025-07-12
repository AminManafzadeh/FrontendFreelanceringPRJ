import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFoundPage() {
  const moveBack = useMoveBack();

  return (
    <div className=" bg-secondary-0 h-screen">
      <div className="flex justify-center items-center">
        <div className="sm:max-w-sm pt-16">
          <h1 className="text-xl font-bold text-error mb-8">
            صفحه ای که به دنبالش بودید پیدا نشد
          </h1>
          <button onClick={moveBack} className="flex items-center gap-x-4">
            <HiArrowRight className="w-6 h-6 text-primary-900" />
            <span>برگشت</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
