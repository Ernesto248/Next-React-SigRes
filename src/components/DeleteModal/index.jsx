"use client";
import { useGlobalContext } from "@/context/GlobalContext";

const DeleteModal = ({ idToUse, isOpen, onConfirmDelete, onClose }) => {
  const { selectedItem } = useGlobalContext();

  if (!isOpen || !selectedItem) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-lg font-bold mb-4">
          Are you sure you want to delete
        </h2>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              onConfirmDelete(selectedItem[idToUse]);
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
