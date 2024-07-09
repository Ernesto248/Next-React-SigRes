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
    {
      name: "dormitorioID",
      label: "Id del dormitorio",
      type: "number",
      placeholder: "Inserta el id del dormitorio",
    },
  ];

  const initialValues = {
    codigo: "",
    capacidad: "",
    ocupacion: "",
    dormitorioID: "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/cuarto/add/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      window.location.href = "http://localhost:3000/cuarto/list/";
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <GenericForm
        fields={fields}
        validationSchema={cuartoValidationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
      />
    </div>
  );
}

export default CuartoForm;
