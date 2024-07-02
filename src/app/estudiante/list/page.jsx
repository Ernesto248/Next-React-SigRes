"use client";
import GenericCard from "@/components/GenericCard";
import DeleteModal from "@/components/DeleteModal";
import UpdateModal from "@/components/UpdateModal";
import DetailModal from "@/components/DetailModal"; // Importa el DetailModal
import validationSchema from "@/schemas/estudentSchema";
import { useGlobalContext } from "@/context/GlobalContext";

const EstudianteList = () => {
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

  const estudiantes = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "Perez",
      carnet_identidad: "12345678901",
      facultad: "Ingeniería",
      carrera: "Informática",
      ano_academico: 3,
      cuarto: "A101",
    },
    {
      id: 2,
      nombre: "Maria",
      apellido: "Gomez",
      carnet_identidad: "23456789012",
      facultad: "Ciencias",
      carrera: "Biología",
      ano_academico: 2,
      cuarto: "B202",
    },
    {
      id: 3,
      nombre: "Carlos",
      apellido: "Lopez",
      carnet_identidad: "34567890123",
      facultad: "Artes",
      carrera: "Música",
      ano_academico: 1,
      cuarto: "C303",
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "Martinez",
      carnet_identidad: "45678901234",
      facultad: "Medicina",
      carrera: "Enfermería",
      ano_academico: 4,
      cuarto: "D404",
    },
    {
      id: 5,
      nombre: "Luis",
      apellido: "Hernandez",
      carnet_identidad: "56789012345",
      facultad: "Derecho",
      carrera: "Abogacía",
      ano_academico: 5,
      cuarto: "E505",
    },
  ];

  const {
    isDeleteModalOpen,
    isUpdateModalOpen,
    isDetailModalOpen, // Añade el estado del DetailModal
    handleDeleteClick,
    handleUpdateClick,
  } = useGlobalContext();

  return (
    <div className="list-container">
      {estudiantes.map((estudiante) => (
        <div key={estudiante.id}>
          <GenericCard
            fields={cardFields}
            item={estudiante}
            onDelete={handleDeleteClick}
            onUpdate={handleUpdateClick}
          />
        </div>
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

export default EstudianteList;
