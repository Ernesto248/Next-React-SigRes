"use client";
import React from "react";
import GenericForm from "@/components/GenericForm";
import { useGlobalContext } from "@/context/GlobalContext";

const UpdateModal = ({ isOpen, fields, validationSchema }) => {
  if (!isOpen) return null;

  const { handleCloseUpdateModal, selectedItem, handleConfirmUpdate } =
    useGlobalContext();

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Item</h2>
        <GenericForm
          fields={fields}
          initialValues={selectedItem}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleConfirmUpdate(values);
            handleCloseUpdateModal();
          }}
        />
        <button type="button" onClick={handleCloseUpdateModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
