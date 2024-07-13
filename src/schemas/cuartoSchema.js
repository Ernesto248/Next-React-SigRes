import * as Yup from "yup";

const cuartoValidationSchema = Yup.object({
  codigo: Yup.string()
    .required("Obligatorio")
    .matches(
      /^[A-Za-z]{3}-\d-\d-\d$/,
      "Debe seguir el formato lll-n-n-n   (l=letra n=numero)"
    )
    .test(
      "no-leading-whitespace",
      "No puede comenzar con un espacio en blanco",
      (value) => value && value[0] !== " "
    ),
  capacidad: Yup.number()
    .required("Obligatorio")
    .min(8, "La capacidad mínima es 8")
    .max(16, "La capacidad máxima es 16"),
  ocupacion: Yup.number()
    .required("Obligatorio")
    .min(0, "No puede ser negativo")
    .test(
      "max-ocupacion",
      "La ocupación no puede exceder la capacidad",
      function (value) {
        return value <= this.parent.capacidad;
      }
    ),
  dormitorioID: Yup.number()
    .required("Obligatorio")
    .min(1, "El ID del dormitorio debe ser un número positivo"),
});

export default cuartoValidationSchema;
