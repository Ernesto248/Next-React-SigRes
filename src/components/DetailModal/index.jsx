"use client";
import React from "react";
import { useGlobalContext } from "@/context/GlobalContext";

const DetailModal = ({ isOpen, fields }) => {
  if (!isOpen) return null;

  const { selectedItem, handleCloseDetailModal } = useGlobalContext();

  return (
    <div className="modal">
      <div className="modal-content">
        <h2 className="text-lg font-bold mb-4">Item Details</h2>
        <div className="mb-4">
          {fields.map((field) => (
            <div key={field.name} className="mb-2">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                {field.label}:
              </label>
              <input
                type={field.type}
                value={selectedItem[field.name]}
                readOnly
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded"
            onClick={handleCloseDetailModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
