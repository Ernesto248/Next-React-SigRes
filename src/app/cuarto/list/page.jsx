"use client";
import React from "react";
import GenericCard from "@/components/GenericCard";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import validationSchema from "@/schemas/cuartoSchema";
import { useGlobalContext } from "@/context/GlobalContext";
import DetailModal from "@/components/DetailModal";

const CuartoList = () => {
  const fields = [
    { name: "codigo", label: "Codigo" },
    { name: "capacidad", label: "Capacidad" },
    { name: "ocupacion", label: "Ocupacion" },
  ];

  const cuartos = [
    { id: 1, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 2, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 3, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 4, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 5, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 6, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 7, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 8, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
    { id: 9, codigo: "jj-3-x", capacidad: 6, ocupacion: 3 },
  ];

  const {
    isDeleteModalOpen,
    isUpdateModalOpen,
    isDetailModalOpen,
    handleDeleteClick,
    handleUpdateClick,
  } = useGlobalContext();

  return (
    <div className="list-container">
      {cuartos.map((cuarto, index) => (
        <GenericCard
          key={index}
          fields={fields}
          item={cuarto}
          onDelete={handleDeleteClick}
          onUpdate={handleUpdateClick}
        />
      ))}
      <DeleteModal isOpen={isDeleteModalOpen} />
      <UpdateModal
        isOpen={isUpdateModalOpen}
        fields={fields}
        validationSchema={validationSchema}
      />
      <DetailModal isOpen={isDetailModalOpen} fields={fields} />
    </div>
  );
};

export default CuartoList;
