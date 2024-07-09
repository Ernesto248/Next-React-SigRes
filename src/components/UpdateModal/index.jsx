"use client";
import React from "react";
import GenericForm from "@/components/GenericForm";
import { useGlobalContext } from "@/context/GlobalContext";

const UpdateModal = ({
  idToUse,
  isOpen,
  fields,
  validationSchema,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const { handleCloseUpdateModal, selectedItem } = useGlobalContext();

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Update Item</h2>
        <GenericForm
          fields={fields}
          initialValues={selectedItem}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log(selectedItem[idToUse]);
            await onSubmit(selectedItem[idToUse], values);
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
