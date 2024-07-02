"use client";
import GenericForm from "@/components/GenericForm";
import React from "react";
import cuartoValidationSchema from "@/schemas/cuartoSchema";

function CuartoForm() {
  const fields = [
    {
      name: "codigo",
      label: "Codigo",
      type: "text",
      placeholder: "Inserta el codigo del cuarto",
    },
    {
      name: "capacidad",
      label: "Capacidad",
      type: "number",
      placeholder: "Inserta la capacidad del cuarto",
    },
    {
      name: "ocupacion",
      label: "Ocupación",
      type: "number",
      placeholder: "Inserta la ocupacion del cuarto",
    },
  ];

  const handleSubmit = (values, { setSubmitting }) => {
    // Handle form submission
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <GenericForm
        fields={fields}
        validationSchema={cuartoValidationSchema}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default CuartoForm;
