"use client";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const DeleteModal = ({ isOpen }) => {
  if (!isOpen) return null;

  const { selectedItemId, handleCloseDeleteModal, handleConfirmDelete } =
    useGlobalContext();

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-lg font-bold mb-4">Are you sure?</h2>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded mr-2"
            onClick={handleCloseDeleteModal}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handleConfirmDelete(selectedItemId)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
