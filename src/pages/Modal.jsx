import React, { useState } from 'react';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* Modal Trigger Button */}
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-1/2">
            {/* Modal Title */}
            <h2 className="text-xl font-bold mb-4">Modal Title</h2>

            {/* Modal Body */}
            <textarea className="w-full h-32 border border-gray-300 rounded p-2 mb-4" placeholder="Enter your text"></textarea>

            {/* Modal Footer */}
            <div className="flex justify-end">
              <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={closeModal}>
                Cancel
              </button>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
