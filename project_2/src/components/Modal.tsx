import React from "react";

//children: React.ReactNode is a standard pattern in React that allows a component, such as a Modal, to accept and display any content passed between its opening and closing tags.
const Modal: React.FC<{
  children: React.ReactNode; // Content that will be displayed inside the modal window (BlogForm)
  onClose: () => void; // Function to close the modal window
}> = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow relative">
        {children} {/* <--- BlogForm will be displayed here */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
