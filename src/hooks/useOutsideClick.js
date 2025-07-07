import { useEffect, useRef } from "react";

export default function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    const handleRemoveModal = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("click", handleRemoveModal, listenCapturing);

    return () =>
      document.removeEventListener("click", handleRemoveModal, listenCapturing);
  }, [handler, listenCapturing]);

  return ref;
}
