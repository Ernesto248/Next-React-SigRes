"use client";
import React, { useEffect, useState } from "react";
import GenericForm from "@/components/GenericForm";
import validationSchema from "@/schemas/estudentSchema";

function Estudiante() {
  const [cuartos, setCuartos] = useState([]);

  useEffect(() => {
    const fetchCuartos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/cuarto/list/");
        const data = await response.json();
        setCuartos(data);
      } catch (error) {
        console.error("Error fetching cuartos:", error);
      }
    };

    fetchCuartos();
  }, []);

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
      type: "select",
      placeholder: "Selecciona tu cuarto",
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

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/estudiante/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Success:", data);
      window.location.href = "http://localhost:3000/estudiante/list/";
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
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        initialValues={initialValues}
        comboBoxOptions={cuartos.map((cuarto) => ({
          value: cuarto.codigo,
          label: cuarto.codigo,
        }))}
      />
    </div>
  );
}

export default Estudiante;
