"use client";
import GenericForm from "@/components/GenericForm";
import React from "react";
import validationSchema from "@/schemas/estudentSchema";

function Estudiante() {
  const fields = [
    {
      name: "nombre",
      label: "Nombre",
      type: "text",
      placeholder: "Inserta tu nombre",
    },
    {
      name: "apellido",
      label: "Apellido",
      type: "text",
      placeholder: "Inserta tu apellido",
    },
    {
      name: "carnet_identidad",
      label: "Carnet de identidad",
      type: "text",
      placeholder: "Inserta tu carnet de identidad",
    },
    {
      name: "facultad",
      label: "Facultad",
      type: "text",
      placeholder: "Inserta tu facultad",
    },
    {
      name: "carrera",
      label: "Carrera",
      type: "text",
      placeholder: "Inserta tu carrera",
    },
    {
      name: "ano_academico",
      label: "Año Académico",
      type: "number",
      placeholder: "Inserta tu año académico",
    },
    {
      name: "cuarto",
      label: "Cuarto",
      type: "text",
      placeholder: "Inserta tu cuarto",
    },
  ];

  const initialValues = {
    nombre: "",
    apellido: "",
    carnet_identidad: "",
    facultad: "",
    carrera: "",
    ano_academico: 1,
    cuarto: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <GenericForm
        fields={fields}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </div>
  );
}

export default Estudiante;
