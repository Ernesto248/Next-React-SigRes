import * as Yup from "yup";

const validationSchema = Yup.object({
  nombre: Yup.string().required("Required"),
  apellido: Yup.string().required("Required"),
  carnet_identidad: Yup.string()
    .matches(/^\d{11}$/, "Carnet de Identidad must be exactly 11 digits")
    .test(
      "valid-date",
      "Carnet de Identidad must have a valid date",
      (value) => {
        if (!value) return false;
        const year = parseInt(value.substring(0, 2), 10);
        const month = parseInt(value.substring(2, 4), 10);
        const day = parseInt(value.substring(4, 6), 10);
        return (
          year >= 0 &&
          year <= 99 &&
          month >= 1 &&
          month <= 12 &&
          day >= 1 &&
          day <= 31
        );
      }
    )
    .required("Required"),
  facultad: Yup.string().required("Required"),
  carrera: Yup.string().required("Required"),
  ano_academico: Yup.number().required("Required").min(1).max(6).integer(),
  cuarto: Yup.string().required("Required"),
});

export default validationSchema;
