"use client";
import React, { useState, useEffect } from "react";
import GenericCard from "@/components/GenericCard";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import validationSchema from "@/schemas/cuartoSchema";
import { useGlobalContext } from "@/context/GlobalContext";
import DetailModal from "@/components/DetailModal";
import SearchBar from "@/components/SearchBar";
import AddButton from "@/components/AddButton";

const CuartoList = () => {
  const {
    items: cuartos = [],
    filteredItems: filteredCuartos = [],
    isDeleteModalOpen,
    isUpdateModalOpen,
    isDetailModalOpen,
    handleDeleteClick,
    handleUpdateClick,
    handleCloseDeleteModal,
    handleDeleteItem,
    handleUpdateItem,
    handleSearch,
    handleSuccess,
    dormitorios,
  } = useGlobalContext();

  const fields = [
    { name: "codigo", label: "Codigo" },
    { name: "capacidad", label: "Capacidad" },
    { name: "ocupacion", label: "Ocupacion" },
    { name: "dormitorioID", label: "Nro de Dormitorio", type: "select" },
  ];

  const cardFields = [
    { name: "codigo", label: "Codigo" },
    { name: "capacidad", label: "Capacidad" },
    { name: "ocupacion", label: "Ocupacion" },
  ];

  useEffect(() => {
    handleSuccess("http://127.0.0.1:8000/api/cuarto/list/");
  }, []);

  return (
    <div>
      <div className="searchbar-container">
        <SearchBar
          onSearch={(term) =>
            handleSearch(term, ["codigo", "capacidad", "ocupacion"])
          }
        />
        <AddButton url="/cuarto/add" />
      </div>
      <div className="list-container">
        {(filteredCuartos || []).map((cuarto) => (
          <div key={cuarto.id}>
            <GenericCard
              fields={cardFields}
              item={cuarto}
              onDelete={() => handleDeleteClick(cuarto)}
              onUpdate={() => handleUpdateClick(cuarto)}
            />
          </div>
        ))}
        <DeleteModal
          idToUse="codigo"
          isOpen={isDeleteModalOpen}
          onConfirmDelete={(id) =>
            handleDeleteItem(
              `http://127.0.0.1:8000/api/cuarto/delete/?codigo=${id}`,
              `http://127.0.0.1:8000/api/cuarto/list/`
            )
          }
          onClose={handleCloseDeleteModal}
        />
        <UpdateModal
          title="Cuarto"
          idToUse="codigo"
          isOpen={isUpdateModalOpen}
          fields={fields}
          validationSchema={validationSchema}
          toComboBox={dormitorios}
          CBValue="id"
          onSubmit={(id, values) =>
            handleUpdateItem(
              `http://127.0.0.1:8000/api/cuarto/update/?codigo=${id}`,
              `http://127.0.0.1:8000/api/cuarto/list/`,
              values
            )
          }
        />
        <DetailModal isOpen={isDetailModalOpen} fields={fields} />
      </div>
    </div>
  );
};

export default CuartoList;
