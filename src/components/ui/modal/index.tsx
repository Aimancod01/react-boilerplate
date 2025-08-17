import { useEffect, useRef, type FC, type ReactNode } from "react";

type ModalProps = {
  isModal: boolean;
  setIsModal: (value: boolean) => void;
  title?: string;
  children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ isModal, setIsModal, title, children }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  const handleOutsideClick = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <>
      {isModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div
            ref={modalRef}
            className="bg-white p-6 w-full max-w-lg rounded-lg shadow-md"
          >
            <div className="mb-3 flex items-center justify-center">
              <h1 className="text-2xl font-bold">{title}</h1>
            </div>
            <div className="my-5">{children}</div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModal(false)} // ✅ directly set to false
                className="bg-gray-300 px-4 py-2 w-32 rounded-full font-semibold hover:bg-gray-400 duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
