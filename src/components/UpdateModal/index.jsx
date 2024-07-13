"use client";
import React from "react";
import GenericForm from "@/components/GenericForm";
import { useGlobalContext } from "@/context/GlobalContext";

const UpdateModal = ({
  title,
  idToUse,
  isOpen,
  fields,
  validationSchema,
  toComboBox,
  CBValue,
  onSubmit,
}) => {
  if (!isOpen) return null;

  const { handleCloseUpdateModal, selectedItem } = useGlobalContext();

  return (
    <div className="modal">
      {console.log(toComboBox)}
      <div className="modal-content">
        <h2>Actualizando: {title}</h2>
        <GenericForm
          fields={fields}
          initialValues={selectedItem}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            console.log(selectedItem[idToUse]);
            await onSubmit(selectedItem[idToUse], values);
            handleCloseUpdateModal();
          }}
          comboBoxOptions={(toComboBox || []).map((option) => ({
            value: option[CBValue],
            label: option[CBValue],
          }))}
        />
        <button type="button" onClick={handleCloseUpdateModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateModal;
