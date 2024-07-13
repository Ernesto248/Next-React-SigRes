import * as Yup from "yup";

const isValidDate = (value) => {
  const year = parseInt(value.substring(0, 2), 10);
  const month = parseInt(value.substring(2, 4), 10);
  const day = parseInt(value.substring(4, 6), 10);

  if (month < 1 || month > 12) return false;

  const daysInMonth = [
    31,
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return day >= 1 && day <= daysInMonth[month - 1];
};

const validationSchema = Yup.object({
  nombre: Yup.string()
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    )
    .matches(/^[A-Za-z\s]+$/, "Solo puede contener letras y espacios"),

  apellido: Yup.string()
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    )
    .matches(/^[A-Za-z\s]+$/, "Solo puede contener letras y espacios"),

  carnet_identidad: Yup.string()
    .matches(
      /^\d{11}$/,
      "El Carnet de Identidad debe tener exactamente 11 dígitos"
    )
    .test(
      "valid-date",
      "El Carnet de Identidad debe tener una fecha válida",
      (value) => {
        if (!value) return false;
        return isValidDate(value);
      }
    )
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    ),
  facultad: Yup.string()
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    )
    .matches(/^[A-Za-z\s]+$/, "Solo puede contener letras y espacios"),

  carrera: Yup.string()
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    )
    .matches(/^[A-Za-z\s]+$/, "Solo puede contener letras y espacios"),

  ano_academico: Yup.number().required("Obligatorio").min(1).max(6).integer(),

  cuarto: Yup.string()
    .required("Obligatorio")
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    ),
});

export default validationSchema;
