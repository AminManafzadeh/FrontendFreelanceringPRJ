import { HiOutlineXMark } from "react-icons/hi2";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, onClose, title, children }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-screen h-screen bg-secondary-800 bg-opacity-30 z-40">
        <div
          ref={ref}
          className="fixed w-[calc(100vw-3rem)] md:max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto p-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 shadow-lg transition-all duration-300 ease-in-out"
        >
          <div className="flex mb-2 items-center justify-between border-b border-b-secondary-300 pb-2">
            <p className="text-secondary-700 font-bold">{title}</p>
            <button onClick={onClose}>
              <HiOutlineXMark className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
