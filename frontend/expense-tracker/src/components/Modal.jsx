import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ children, isOpen, onClose, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-[calc(100%-1rem)] max-h-full overflow-y-auto overflow-x-hidden bg-black/20 bg-opacity-50">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        {/* Modal Content */}
        <div className="relative bg-white rounded-lg shadow-sm ">
          {/* Modal Header */}

          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-400">
            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
            <button
              type="button"
              className="text-gray-500 bg-transparent hover:bg-red-500/90 hover:text-white rounded-lg text-lg w-8 h-8 inline-flex justify-center items-center cursor-pointer"
              onClick={onClose}
            >
              <IoCloseSharp />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
