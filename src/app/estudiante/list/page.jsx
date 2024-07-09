"use client";
import React, { useEffect } from "react";
import GenericCard from "@/components/GenericCard";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import DetailModal from "@/components/DetailModal";
import validationSchema from "@/schemas/estudentSchema";
import { useGlobalContext } from "@/context/GlobalContext";
import SearchBar from "@/components/SearchBar";
import AddButton from "@/components/AddButton";

const EstudianteList = () => {
  const {
    items: estudiantes = [],
    filteredItems: filteredEstudiantes = [],
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
  } = useGlobalContext();

  const fields = [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "apellido", label: "Apellido", type: "text" },
    { name: "carnet_identidad", label: "Carnet de Identidad", type: "text" },
    { name: "facultad", label: "Facultad", type: "text" },
    { name: "carrera", label: "Carrera", type: "text" },
    { name: "ano_academico", label: "Año Académico", type: "number" },
    { name: "cuarto", label: "Cuarto", type: "text" },
  ];

  const cardFields = [
    { name: "nombre", label: "Nombre", type: "text" },
    { name: "apellido", label: "Apellido", type: "text" },
    { name: "carrera", label: "Carrera", type: "text" },
    { name: "cuarto", label: "Cuarto", type: "text" },
  ];

  useEffect(() => {
    handleSuccess("http://127.0.0.1:8000/api/estudiante/list/");
  }, []);

  return (
    <div>
      <div className="searchbar-container">
        <SearchBar
          onSearch={(term) =>
            handleSearch(term, ["nombre", "apellido", "carrera", "cuarto"])
          }
        />
        <AddButton url="/estudiante/add" />
      </div>
      <div className="list-container">
        {(filteredEstudiantes || []).map((estudiante) => (
          <div key={estudiante.id}>
            <GenericCard
              fields={cardFields}
              item={estudiante}
              onDelete={() => handleDeleteClick(estudiante)}
              onUpdate={() => handleUpdateClick(estudiante)}
            />
          </div>
        ))}
        <DeleteModal
          idToUse="carnet_identidad"
          isOpen={isDeleteModalOpen}
          onConfirmDelete={(id) =>
            handleDeleteItem(
              `http://127.0.0.1:8000/api/estudiante/delete/?carnet_identidad=${id}`,
              `http://127.0.0.1:8000/api/estudiante/list/`
            )
          }
          onClose={handleCloseDeleteModal}
        />
        <UpdateModal
          idToUse="carnet_identidad"
          isOpen={isUpdateModalOpen}
          fields={fields}
          validationSchema={validationSchema}
          onSubmit={(id, values) =>
            handleUpdateItem(
              `http://127.0.0.1:8000/api/estudiante/update/?carnet_identidad=${id}`,
              `http://127.0.0.1:8000/api/estudiante/list/`,
              values
            )
          }
        />
        <DetailModal isOpen={isDetailModalOpen} fields={fields} />
      </div>
    </div>
  );
};

export default EstudianteList;
